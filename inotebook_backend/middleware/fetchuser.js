const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sk@wt123'

const  fetchUser = (req, res, next)=>{
//get token 

    console.log(req.body);
    const token = req.body.token;
    console.log("token = ", token);
    if(!token)
    {
        res.status(401).json({error:"invalid token"});
    }
    try {
        let data = jwt.verify(token, JWT_SECRET);
        console.log("data ", data);
        req.user = data;
        next();
    } catch (error) {
        res.status(401).json({ "Error": error.message });
    }

}

module.exports = fetchUser;