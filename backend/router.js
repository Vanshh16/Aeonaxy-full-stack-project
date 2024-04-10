const express = require("express");
const cors = require("cors");
const User = require("./model");
const router = express.Router();
const transporter = require("./email.js");

router.use(cors());
router.options('*', cors());
router.get("/",cors(), (req, res) => {});

router.post("/",cors(), async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

router.post("/email",cors(), async (req, res) => {
  console.log(req.body);
  try {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const message = "Thank You for choosing Dribble";
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Thank You- Dribble",
      html: `<p> Name: ${name} </p>
        <p>Username: ${username}</p>
        <p> E-mail: ${email} </p>
        <p> Message: ${message} </p>`,
    };

    await transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.json(error);
      } else {
        console.log("email sent");
        res.status(200).json({success: true, message: "Email sent"})
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
