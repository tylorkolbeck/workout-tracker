const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  totalDuration: Number,

  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

WorkoutSchema.method("calcDuration", () => {
  console.log("test");
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
