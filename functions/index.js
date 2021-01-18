const  functions= require('firebase-functions');
const  express= require('express');
const  cors= require('cors');
const  stripe= require('stripe')("sk_test_z8Yfup7uBS6cKN06OMtHukwy00qnJaNNHL");
const app = express();
app.use(cors({origin:true}));
app.use(express.json());
app.get("/",(a,b)=>{
    b.status(200).json("server on fire base")
})
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
exports.api=functions.https.onRequest(app)
