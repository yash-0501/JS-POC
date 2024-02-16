import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

function logReqRes(fileName: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    fs.appendFile(
      fileName,
      `\n${new Date(Date.now()).toLocaleString()} : ${req.ip} : ${req.path} : ${
        req.method
      }`,
      (err) => {
        if (err) {
          res.send(401).json({ message: err.message });
        } else {
          next();
        }
      },
    );
  };
}

export { logReqRes };
