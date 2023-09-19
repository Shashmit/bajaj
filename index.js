const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.post("/bfhl", (req, res) => {
  try {
    const { full_name, dob, data } = req.body;
    console.log(data);
    const user_id = `${full_name}_${dob}`;

    const numbers = data.filter((item) => item.match(/[0-9]/));
    const alpha = data.filter((item) => item.match(/[a-zA-Z]/));

    const highest_alpha = alpha.sort().reverse()[0];

    const response = {
      is_success: true,
      user_id,
      email: "john@xyx@gmail.com",
      numbers,
      alpha,
      highest_alpha,
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({ err });
  }
});

app.get("/bfhl", (req, res) => {
  try {
    res.status(200).send({ operation_code: 1 });
  } catch (err) {
    res.status(400).send({ err });
  }
});

app.listen(process.env.ORIGIN_PORT, () => {
  console.log("Server is running on port " + process.env.ORIGIN_PORT);
});
