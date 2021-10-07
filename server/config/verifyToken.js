import Jwt from 'jsonwebtoken';

function verifyJwt(req, res, next){
    const token = req.headers.authorization;
    console.log(token);
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
    } catch(err) {
        res.status(400).send('Invalid Token');
    }
    next();
}

export default verifyJwt;