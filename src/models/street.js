import mongoose from 'mongoose';

/**
 * Street model schema.
 */
const streetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    start: { type: [Number], required: true },
    end: { type: [Number], required: true },
    line: { type: [Number], required: true }
});

export default mongoose.model('street', streetSchema);