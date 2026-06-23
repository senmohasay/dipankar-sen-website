const Razorpay = require("razorpay");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount, // amount in currency subunits
      currency: "INR",
      receipt: "receipt_order_123",
    };

    try {
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
