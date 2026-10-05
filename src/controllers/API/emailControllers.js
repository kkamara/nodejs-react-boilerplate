'use strict';
const { status, } = require("http-status");
const { testSendEmail, } = require("../../services/email");
const config = require("../../config/index");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (req, res) => {
  const sendEmail = await testSendEmail({
    subject: "Test Email ✔",
    plainText: `This is a test email.\n\n${config.appName} 2026.`,
    html: `
      <style>
        .lead {
          font-size: 18px;
          color: red;
        }
      </style>
      <div class="lead">
        This is a test email.
      </div>
      <br/>
      <footer>
        ${config.appName} &copy; 2026.
      </footer>
    `,
  });
  if (false === sendEmail) {
    res.status(status.INTERNAL_SERVER_ERROR);
    throw new Error(
      "Error encountered when attempting to send email.",
    );
  }

  res.status(status.OK);
  return res.json({
    message: "Message Sent.",
  });
});

module.exports = { sendEmail, };