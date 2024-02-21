import { connect } from 'mongoose';

async function connectMongoDb(uri: string) {
  return connect(uri).then(() =>
    console.log('Mongo DB Connection established!'),
  );
}

export { connectMongoDb };
