// src/services/street.js

import streetModel from '../models/street';

/**
 * Stores a new street into the database.
 * @param {Object} street object to create.
 * @throws {Error} If the street is not provided.
 */
export const create = async (street) => {
    if (!street)
        throw new Error('Missing street');

    await streetModel.create(street);
}