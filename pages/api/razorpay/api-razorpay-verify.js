const crypto = require("crypto");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { order_id, payment_id, signature } = req.body;
    
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(order_id + "|" + payment_id);
    const generated_signature = hmac.digest("hex");

    if (generated_signature === signature) {
      res.status(200).json({ status: "success" });
    } else {
      res.status(400).json({ status: "failed" });
    }
  }
}
