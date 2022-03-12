// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY);

async function sendEmail(req, res) {
  const { name, phone, email, subject, comment } = req.body;
  try {
    await sendgrid.send({
      to: "contacte@clinicadentalgraell.com",
      from: "contacte@clinicadentalgraell.com",
      subject: `[NOU CONTACTE WEB] ${subject}`,
      html: `<p>Nou contacte generat des del formulari de la web:</p>
      <ul>
      <li><strong>Nom i cognoms:</strong> ${name}</li>
      <li><strong>Num. telèfon:</strong> ${phone}</li>
      <li><strong>Correu electrònic:</strong> ${email}</li>
      <li><strong>Assumpte:</strong> ${subject}</li>
      <li><strong>Comentari:</strong> ${comment}</li>
      </ul>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ status: 200 });
}

export default sendEmail;
