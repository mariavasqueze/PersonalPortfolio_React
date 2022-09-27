const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // use SSL
	auth: {
		user: "",
		pass: "",
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Ready to Send");
	}
});

router.post("/contact", (req, res) => {
	const name = req.body.firstName + req.body.lastName;
	const email = req.body.email;
	const message = req.body.message;
	const phone = req.body.phone;
	const mail = {
		from: email,
		to: "mariadelmarvze@gmail.com",
		subject: "Hi there! - Portfolio Contact Form",
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
	};

	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json(error);
		} else {
			res.json({ code: 200, status: "Message Sent" });
		}
	});
});

app.listen(8000, () => console.log("Server Running"));
