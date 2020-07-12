import cron from 'cron';
import { fetchNewsApi } from './newsApiFetcher';
import { fetchgNewsApi } from './googleApiFetcher';

export const newsCron = new cron.CronJob('*/3 * * * *', () => {
  fetchNewsApi();
}).start();

export const gnewsCron = new cron.CronJob('*/5 * * * *', () => {
  fetchgNewsApi();
}).start();
