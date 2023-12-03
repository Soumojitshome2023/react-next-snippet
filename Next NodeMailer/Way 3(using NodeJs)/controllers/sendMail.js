const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp

    const transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service:'gmail',
        // port: 587,
        // port: 25,
        auth: {
            // user: 'dorothy.moore11@ethereal.email',
            // pass: 'SHyYBGy1cv5rHayyFR'
            user: 'soumojit.shome@gmail.com',
            pass: 'vhki mqtf kdvq dpsh'
        }
    });

    let info = await transporter.sendMail({
        from: '"Soumojit Shome 👻" <soumojit.shome@gmail.com>', // sender address
        to: "soumojitshome2021@gmail.com", // list of receivers
        subject: "Hello Raj", // Subject line
        text: "Hello Raj", // plain text body
        html: "<b>Hello Soumojit</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;