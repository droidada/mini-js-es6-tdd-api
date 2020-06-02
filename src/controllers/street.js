import street from '../models/street';
import { lineFromPoints, shortestDistance } from '../util/calc';

  /**
   * Returns json response with the street closest to point
   * @param {any} req * Req params should contain x and y coordinates of point
   * @param {any} res 
   */
  export const getClosestStreet = (req, res) => {
    const { x, y } = req.query;
    street.find({}, (err, streets) => {
      if(err) {
        res.json({status: false, error: "Something went wrong"});
        return;
      }
      
      if (streets?.length == 0) return res.json({status: true, message: "No streets at the moment"})
       
      const closestStreet = streets.reduce((closer, cur) => shortestDistance([x,y],closer.line) < shortestDistance([x,y],cur.line) ? closer : cur, streets[0])
      res.json({status: true, closestStreet});
    });
  }

  /**
   * Returns json response with all streets from the Database
   * @param {any} req 
   * @param {any} res 
   */
  export const getStreets = (req, res) => {
      street.find({}, (err, streets) => {
        if(err) {
          res.json({status: false, error: "Something went wrong"});
          return;
        }
        res.json({status: true, streets});
      });
  }

  /**
   * Adds a Street into Database
   * @param {any} req * Req param should contain street name and start and end points
   * @param {any} res 
   */
  export const addStreet = (req, res) => {
    const { name, start, end } = req.body;
    street.create(
      { name, start, end, line: lineFromPoints(start,end) }
      ,(err, result) => {
      if(err) {
        // console.log("ERROR ADDING STREET ", err);
        res.statusCode = 500;
        res.json({status: false, error: "Something went wrong. Make sure you are passing data in the right format"});
        return;
      }
      res.json({status: true, message: "Street Saved!!"});
    });
  }
  
  /**
   * Delete a Street with given ID from database
   * @param {any} req * Req body should contain street id
   * @param {any} res 
   */
  export const deleteStreet = (req, res) => {
    street.remove({_id: req.params.id}, (err, streets) => {
      if(err) {
        res.json({status: false, error: "Deleting Street is not successful"});
        return;
      }
      res.json({status: true, message: "Street deleted successfully!!"});
    });
  }
