// from the fireship docker beginner tutorial https://www.youtube.com/watch?v=gAkwW2tuIqE

const app = require("express")();

app.get("/", (req, res) => res.json({ message: "Docker is ezpz 🐳" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
