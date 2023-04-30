const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");

const postRouter = require("./routes/posts");

const Posts = require("./models/posts");
const User = require("./models/users");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5005;

const uri = "mongodb+srv://coder_ravan:BzQmnofrpLYUy2MY@bolchal.wqzypl9.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
      .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
      })
      .then(() =>
            app.listen(port, () => {
                  console.log(`Server running at http://localhost:${port} and is connected to the Database`);
            })
      )
      .catch((error) => {
            console.log(error);
      });



app.use("/api", postRouter);
