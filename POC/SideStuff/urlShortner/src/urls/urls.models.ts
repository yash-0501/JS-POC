import { Schema, model } from "mongoose";
import { urlType } from "./urls.schema";

const urlSchema = new Schema<urlType>({
    shortId: {type: String, required: true, unique: true},
    redirectUrl: {type: String, required: true, unique: true},
    visitHistory: [{timestamps: {type:Date}}]
},
{timestamps: true});

const URL = model('url',urlSchema);

export {
    URL
 }