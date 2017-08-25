import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import authenticate from '../middlewares/authenticate';

import db from '../models';

let router = express.Router(); 

//AUTHENTICATE USER
router.post('/', authenticate, (req, res) => {
  res.status(201).json({ success: true });
  res.render("heyyy");
});


router.get('/:id', (req, res) => {
    db.users.findOne({
        where: {
                id: {
                  $eq: req.params.id
                }
              },   
    logging: console.log }).then(user => {
      res.json({ user });
      });

});

export default router;

