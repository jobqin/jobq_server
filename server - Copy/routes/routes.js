import express from 'express';

//import { signup, login, isAuth } from '../controllers/auth.js';
import { Profession_insert ,Profession_retrive } from '../controllers/professiontable.js';
import { Usertable_insert } from '../controllers/usertable.js';
import { Jobsposted_insert } from '../controllers/jobspostedtable.js';

const router = express.Router();

//controllers/auth
//router.post('/login', login);

//router.post('/signup', signup);

//router.get('/private', isAuth);



//controllers/usertable
router.post('/usertable_insertuser', Usertable_insert);



//controllers/Professiontable
router.post('/professiontable_insert', Profession_insert);
router.post('/Profession_retrive', Profession_retrive);



//controllers/Jobpostedtable
router.post('/jobsposted_insert', Jobsposted_insert);

























router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;