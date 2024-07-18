const express = require("express");
const app = express();
const authRoutes = require("./User");
const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/auth";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
app.use(express.json());

const PORT = 6000;

app.get("/", (req, res) => {
  console.log("Hello Askoverflow!!");
  res.send("Hello Askoverflow!!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // **************frontend**********************************
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// <BrowserRouter>
// <Routes>
//   <Route exact path="/" element={<Homepage />} />
//   <Route exact path="/home" element={<Homepage />} />
//   <Route path="/question/:question_id" element={<Question />} />
//   <Route path="/tag/:tag" element={<Tags />} />
//   <Route path="/user/" element={<UserProfile />} />
// </Routes>
// </BrowserRouter>

// // **************Homepage**********************************

// const [cookies, setCookie] = useCookies(["jwttokenloginuser"]);

// useEffect(() => {
//   // Initialize state from cookies
//   const jwtTokenLoginUserCookie = cookies.jwttokenloginuser || "";
//   // Additional initialization logic if needed
// }, [cookies.jwttokenloginuser]);

// if (cookies.jwttokenloginuser){}
