import mongoose from 'mongoose';

const NewsSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    url: String,
    category: String,
    language: String,
    country: String,
    authencity: {
      type: mongoose.Mixed,
      default: {
        fake: [],
        notSure: [],
        authentic: [],
      },
    },
    totalAuthenticity: { type: Number, default: 0 },
  },
);

const News = mongoose.model('News', NewsSchema);

export default News;
