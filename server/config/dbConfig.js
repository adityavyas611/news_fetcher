import mongoose from 'mongoose';
import { MONGODB_URI } from '../constants';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(`Error Connecting to db:${err}`);
    process.exit();
  }
  console.log('DB is connected!');
});
