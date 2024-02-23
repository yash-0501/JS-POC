import { JwtPayload } from 'jsonwebtoken'; // Import JwtPayload if needed

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload | null; // Define the type of the user property
    }
  }
}
