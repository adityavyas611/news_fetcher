import cron from 'cron';
import { fetchNewsApi } from './newsApiFetcher';
import { fetchgNewsApi } from './googleApiFetcher';

export const newsCron = new cron.CronJob('*/1 * * * *', () => {
  fetchNewsApi();
}).start();

// export const gnewsCron = new cron.CronJob('*/1 * * * *', () => {
//   fetchgNewsApi();
// }).start();
