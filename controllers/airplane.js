import Airplane from '../models/airplane.js';
import { createError } from '../utils/createError.js';

export const getAllPlane = async (req, res, next) => {
    try {
        const airplane = await Airplane.find({});
        !airplane && next(createError(404, "Planes not found!"));
        res.status(201).json({
            message: "Planes Founded Successfully",
            airplane
        })
    } catch (err) {
        next(err)
    }
}

export async function getAirplane(req, res, next) {
    try {
        const Airplane = await Airplane.findById(req.params.id);
        !Airplane && next(createError(404, "Airplane not found!"));
        const newAirplane = await Airplane.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        },
            { new: true })
        res.status(201).json({
            message: "Airplane Founded Successfully",
            Airplane: newAirplane
        })
    }
    catch (err) {
        next(err);
    }
}

export async function postAirplane(req, res, next) {
    try {
        let { username } = await User.findById(req?.user.id);
        let airplane = new Airplane({ ...req.body, authorId: req?.user.id, author: username });
        await airplane.save();
        !airplane && next(createError(404, "Error while creating Airplane!"));
        res.status(201).json({
            message: "Airplane Created Successfully",
            airplane
        })
    }
    catch (err) {
        next(err);
    }
}