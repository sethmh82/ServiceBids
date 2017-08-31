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
    logging: console.log }).then(user => {
      res.json({ user });
      });

});


router.post('/', (req, res) => {

      const { about, photo, location, identifier } = req.body;
      

           db.users.update({
             where: {
               id: {
                 $eq: identifier
               },
                  about: about,
                  photo: photo,
                  location: location
             }
}).then(() => {})

});


router.post('/', (req, res) => {

      const { about, photo, location, identifier } = req.body;
           db.users.update({
             where: {
               id: {
                 $eq: identifier
               },
                  about: about,
                  photo: photo,
                  location: location
             }
}).then(user => {
      res.json({ user });
      });
            
});

export default router;