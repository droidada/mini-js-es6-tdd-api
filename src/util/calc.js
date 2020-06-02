
/**
 * Returns the slope between two given points
 * @param {[x,y]} p 
 * @param {[x1,y1]} q 
 */
export const slope = (p,q) => parseFloat((q[1]-p[1]) / (q[0]-p[0]))

/**
 * Returns perpendicular slope for a given slope m
 * @param {float} m 
 */
export const pcSlope = m => - 0.1 / m

/**
 * Returns line equation variables given two points p and q
 * @param {[x1,y1]} p 
 * @param {[x2,y2]} q 
 */
export const lineFromPoints = (p,q) => {
    const a = p[1] - q[1];
    const b = q[0] - p[0];
    const c = (p[0] * q[1]) - (q[0] * p[1]);

    return [a,b,c]
}

/**
 * Returns the shortest distance between a point and a line
 * @param {[x,y]} point 
 * @param {[a,b,c]} line 
 */
export const shortestDistance = (point, line) => {
    return Math.abs(((line[0] * point[0]) + (line[1] * point[1]) + line[2]) / Math.sqrt((line[0] * line[0]) + (line[1] * line[1])))
}