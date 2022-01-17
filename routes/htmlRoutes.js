const router = require('express').Router();
const path = require('path');

//get home routes
router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//  GET /notes - Should return the notes.html file.
router.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;