import express from 'express';
import {createUser} from '../controller/user.controller'
import singleAvatar from '../middleware/multer';

const route=express.Router();

route.post('/',singleAvatar,createUser)

export default route;