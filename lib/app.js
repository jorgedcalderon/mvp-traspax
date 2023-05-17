import dbConnect from "./dbConnect";
import generateError from "./generateError";

const handler = (cb, method) => async (req, res) => {
    try {
        await dbConnect();
        if (method && req.method !== method) generateError('Method not allowed!', 405);
        return await cb(req, res);
    }
    catch (err) {
        console.log(err);
        if (err.name === 'MongoServerError' && err.code === 11000) err.status = 422;
        res.status(+err.status || +err.statusCode || +err.code || 500).send(err);
    }
}


const app = {
    get: cb => handler(cb, 'GET'),
    post: cb => handler(cb, 'POST'),
    put: cb => handler(cb, 'PUT'),
    delete: cb => handler(cb, 'DELETE'),
}

export default app;