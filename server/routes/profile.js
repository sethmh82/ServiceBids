import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import authenticate from '../middlewares/authenticate';
import jwt from 'jsonwebtoken';
import config from '../config';
import db from '../models';

let router = express.Router();

//AUTHENTICATE USER

router.get('/', (req, res) => {
  db.users.findOne({
    where: {
      id: {
        $eq: req.params.id
      }
    },
    logging: console.log
  }).then(user => {
    res.json({ user });
  });

});


router.post('/:id', (req, res) => {
  console.log(req.params.id);

  const { about, photo, location } = req.body;

  db.users.update({
    about: about,
    photo: photo,
    location: location
  },
    {
      where: {
        id: {
          $eq: req.params.id
        }
      }


    }).then(user => {
      res.end();
    });

});

export default router;