import { NextFunction, Request, Response } from 'express';
import { getUser } from '../service/auth';
// import { Request } from "../customs/custom"

async function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  req.user = null;
  const authorizationheaderValue: string | undefined =
    req.headers['authorization'];
  if (
    !authorizationheaderValue ||
    !authorizationheaderValue.startsWith('Bearer')
  )
    return res.redirect('user/login');

  const token = authorizationheaderValue.split('Bearer ')[1];

  try {
    const user = getUser(token);
    // console.log(user);
    if (!user) return res.redirect('user/login');
    req.user = user;
    next();
  } catch {
    return res.redirect('user/login');
  }
}

const restrictTo = (roles: string[]) => {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.user) return res.redirect('/login');

    if (typeof req.user === 'string') {
      // console.log(req.user);
    } else {
      // console.log(req.user)
      if (!roles.includes(req.user.role)) return res.end('Unauthorized!');
    }
    return next();
  };
};

export { isLoggedIn, restrictTo };
