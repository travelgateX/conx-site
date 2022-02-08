const express = require('express'),
  router = express.Router(),
  request = require('request'),
  stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/pay', function (request, resServer) {
  console.log('?????');
  console.log(request.body);
  const token = request.body.stripeToken; // Using Express
  // const token = request.body.id;

    const charge = stripe.charges.create({
      amount: 999,
      currency: 'usd',
      description: 'Example charge',
      source: token,
    });
    resServer.json(charge)
});


module.exports = router;
