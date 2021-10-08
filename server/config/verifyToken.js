import Jwt from 'jsonwebtoken';

function verifyJwt(req, res, next){
    const token = req.headers.authorization;
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch(err) {
        res.status(401).send('Invalid Token');
    }
}

export default verifyJwt;