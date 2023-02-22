import mongoose from 'mongoose';
const HttpError = require('../Custom-Error/http-error')
const path = require('path');
const fs = require('fs');
const Upload = require('./Upload')


const createUpload = async (req: { body: { name: any; location: any; country: any; text: any; image: any;}; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; createdPost: any; }): void; new(): any; }; }; }, next: (arg0: any) => any) => {
    const { name, location, country, text, image } = req.body;

    const createdUpload = await new Upload({
        name: name,
        location: location,
        country: country,
        text: text,
        image: image
    });

    try {
        createdUpload.save();
        res.status(201).json({ message: "upload successful", createdPost: createdUpload });
    } catch (err) {
        const error = new HttpError('Upload failed, please try again.');
        return next(error);
    }
};

exports.createUpload = createUpload;


