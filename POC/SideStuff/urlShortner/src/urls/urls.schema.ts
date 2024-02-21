import { z } from "zod";
import { URL } from "./urls.models";

const urlZodSchema = z.object({
    shortId: z.string({
        required_error: "Short Url is required",
        invalid_type_error: "Short Url must be a string",
    }),
    redirectUrl: z.string({
        required_error: "redirectUrl is required",
        invalid_type_error: "redirectUrl must be a string",
    }),
    visitHistory: z.array(z.object({timstamps:z.string().datetime()}))

});

type urlType = z.infer<typeof urlZodSchema>;

const urlCreateSchema = z.object({
    shortId: z.string({
        required_error: "Short Url is required",
        invalid_type_error: "Short Url must be a string",
    }),
    redirectUrl: z.string({
        required_error: "redirectUrl is required",
        invalid_type_error: "redirectUrl must be a string",
    })
}).refine(data=>isUnique(data.redirectUrl),{
    message: "Redirect url already present!"
});

const isUnique = async (d: string)=>{
    const url = await URL.findOne(
        {
            redirectUrl: d,
        }
    ).exec()
    return url === null;
}


export {
    urlType,
    urlCreateSchema
}