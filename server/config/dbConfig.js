import mongoose from 'mongoose';
import logger from '../utils/logger';
import { MONGODB_URI } from '../constants';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    logger.info(`Error Connecting to db:${err}`);
    process.exit();
  }
  logger.info('DB is connected!');
});
