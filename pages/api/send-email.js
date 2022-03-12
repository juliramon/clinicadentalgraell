// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendgrid from "@sendgrid/mail";
console.log(process.env.NEXT_PUBLIC_SENDGRID_KEY);
sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "contacte@example.com", // Change to your recipient
      from: "contacte@example.com", // Change to your verified sender
      subject: "[NOU FORMULARI WEB]",
      text: "test",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;
