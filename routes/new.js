const express = require("express");
const { route } = require("../app");
const sgMail = require("../services/sendgrid")

const router = express.Router()

router.post("/api/mail", async (req, res)  => {
    const {to, subject, text, html} = req.body;

    const msg = {
        to,
        from: "auntap.ort@gmail.com",
        subject,
        text,
        html,
    };

    try{
        await sgMail.send(msg);
    }catch(err){
        return res.status(err.code).send(err.message);
    }

    res.status(201).send({success: true});
});

module.exports = router;