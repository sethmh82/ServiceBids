import express from 'express';
import db from '../models';

let router = express.Router();

router.post('/:id', (req, res) => {

    const category = req.body.category;

    db.projects.findAll({
        where: {
            category : category
        }
    }).then(projects => {
      res.json({ projects });
      });


});


export default router;