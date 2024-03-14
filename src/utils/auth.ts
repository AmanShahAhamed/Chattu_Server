import { CookieOptions,Response } from "express";
import { IUser } from "../models/user. model";
import { HttpStatus } from "../constant/Response.status";
import jwt from 'jsonwebtoken'


const option: CookieOptions = {
  maxAge: 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};


const sendToken = (
  res: Response,
  user: IUser,
  code: HttpStatus,
  message: any
) => {
  const token = jwt.sign({_id:user._id},process.env.SECRET_KEY!)
  return res
    .status(code)
    .cookie("chattu-token", option)
    .json({ suceess: true, message });
};


export default sendToken;

