import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
);
