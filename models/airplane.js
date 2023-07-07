import mongoose from 'mongoose';

const planeSchema = new mongoose.Schema({
    planeNumber: {
        type: String,
        required: [true, "Name is required."]
    },
    numberofSeats: {
        type: Number,
        required: true
    },
    planeName: {
        type: String,
        required: true
    },
    startTiming: {
        type: Date
    },
    endTiming: {
        type: Date
    },
    
}, { timestamps: true });

export default mongoose.model('plane', planeSchema);