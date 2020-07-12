import winston from 'winston';

const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
  transports: [consoleTransport],
};
// eslint-disable-next-line new-cap
export const logger = new winston.createLogger(myWinstonOptions);
