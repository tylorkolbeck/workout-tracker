const router = require("express").Router();

// TODO: import required model/s
const db = require("../models/index");

// TODO: and add code to the routes so that the app functions correctly

router.post("/api/workouts", (req, res) => {
  console.log("post request");
  db.Workout.create({}).then((workout) => res.json(workout));
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body }
  }).then((workout) => {
    res.json(workout);
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
  ])
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err.message));
});

router.delete("/api/workouts", (req, res) => {
  db.Workout.deleteOne({ _id: req.body.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
