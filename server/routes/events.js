import express from 'express';
import db from '../models';

let router = express.Router();

router.post('/:id', (req, res) => {

  const title = req.body.title;
  console.log(req.body);
  console.log(title);

  db.projects.create({
    
    projectName:title,
    userId:req.params.id

  }).then(res.status(201).json({ success: true }))
});

export default router;
