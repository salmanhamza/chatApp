const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./Connection/db.js");

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 8000;

const rooms = ["general", "tech", "finance", "crypto"];
server.listen(port, () => {
  console.log(`app running on port ${port}`);
});
