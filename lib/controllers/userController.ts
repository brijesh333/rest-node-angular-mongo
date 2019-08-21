import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { ILoginRespose } from '../interfaces';

// const Contact = mongoose.model('Contact', ContactSchema);
const User = require('../models/userModel.ts');

export class UserController {

    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUser(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserWithParam(req: Request, res: Response) {
        User.find({ userId: req.body.userName, password: req.body.password }, (err, user) => {
            if (err) {
                res.send(err);
            }
            let response: ILoginRespose = {
                status: 'failure',
                message: '',
                accessTocken: '',
                expiresIn: 0
            };
            if (user.length == 0) {
                response.status = 'failure',
                    response.message = 'No user exist with provided username and password'
            }
            else {
                response.status = 'success';
                response.message = 'Login successful';
                response.metaInfo = {
                    userInfo: user
                };
                response.accessTocken = 'ABCDABCD';
                response.expiresIn = 123123123123
            }
            res.json(response);
        });
    }

    public getUserWithID(req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }

}