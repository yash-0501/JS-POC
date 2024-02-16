import { model, Schema } from 'mongoose';

// Interface for the Schema
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  jobTitle?: string; // Optional field
}

// Schema
const userSchema: Schema<IUser> = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
});

const User = model<IUser>('User', userSchema);

export {
  User
};
