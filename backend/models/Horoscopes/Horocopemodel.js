import mongoose from "mongoose";

const HoroscopeSchema = new mongoose.Schema({
  horoscopeBanner: {
    type: String,
  },
  daily_date: {
    type: String,
    required: true,
  },
  daily_para: {
    type: String,
    required: true,
  },
  weekly_date: {
    type: String,
    required: true,
  },
  weekly_heading: {
    type: String,
    required: true,
  },
  weekly_para: {
    type: String,
    required: true,
  },
  monthly_date: {
    type: String,
    required: true,
  },
  monthly_para: {
    type: String,
    required: true,
  },
  y_heading: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  generalOverview: {
    type: String,
    required: true,
  },
  whatToLookForwardTo: {
    type: [String],
    required: true,
  },
  whatToWatchOutFor: {
    type: [String],
    required: true,
  },
  lovePredictions: {
    type: String,
    required: true,
  },
  importantDates: {
    type: String,
    required: true,
  },
  // Added fields
  h2: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  video: {
    type: String, // URL to the video stored in Cloudinary or another source
    required: true,
  },
});

const Horoscope = mongoose.model("Horoscope", HoroscopeSchema);

export default Horoscope;
