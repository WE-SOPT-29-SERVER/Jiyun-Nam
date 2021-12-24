const express = require('express');
const router = express.Router();


router.post('/post', (req, res) => {
  const result = {
    status: 200,
    message: 'lv3.api/blog/post',
  };
  res.status(200).send(result);
});



module.exports = router;