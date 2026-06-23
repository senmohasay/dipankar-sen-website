export default async function handler(req, res) {
  const { email } = req.body;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATA_CENTER = process.env.MAILCHIMP_API_SERVER; // e.g., us19

  const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, status: "subscribed" }),
  });

  const data = await response.json();
  res.status(200).json(data);
}

