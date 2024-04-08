const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});

const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

transporter.verify((error) => {
    if (error) {
    console.log(error);
    } else {
    console.log("Ready to Send");
    }
    });

module.exports = transporter;
    // app.post("/contact", (req, res) => {

    //     const name = req.body.firstName + req.body.lastName;
    //     const email = req.body.email;
    //     const phone = req.body.phone;
    //     const message = req.body.message;
    
    //     const mailOptions = {
    //         from: name,
    //         to: process.env.SMTP_EMAIL,
    //         subject: "Contact Form Submission- Portfolio",
    //         html: `<p> Name: ${name} </p>
    //         <p> E-mail: ${email} </p>
    //         <p> Phone: ${phone} </p>
    //         <p> Message: ${message} </p>`,
    //     };
    
    //      transporter.sendMail(mailOptions, (error) => {
    //         if(error){
    //             res.json(error);
    //         }
    //         else{
    //             res.json({code:200, message: "Email sent"})
    //         }
    //     });
    
    // })