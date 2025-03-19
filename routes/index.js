var express = require("express");
var router = express.Router();
const API_KEY = process.env.API_KEY;
const getConfig = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

router.get("/movies", async (req, res) => {
  let data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    getConfig
  ).then((res) => res.json());
  res.json({
    ok: Boolean(data),
    movies: data?.results,
  });
});

module.exports = router;
