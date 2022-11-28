import User from '../api/users/userModel';
// Authentication and Authorization Middleware
export default async (req, res, next) => {
  if (req.session && req.session.authenticated) {
    let user = await User.findByUserName(req.session.user);
    if (!user)
      return res.status(401).json({status:401,message:"unauthorised"});
    next();
  } else {
    return res.status(401).json({status:401,message:"unauthorised"});
  }
};