// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import app from "../../../lib/app";
import Passenger from '../../../models/pasajero';

export default app.post(async (req, res) => {
    await Passenger.create(req.body);
    res.status(200).json({ message: 'Passenegers have been saved!' })
})

