import { Request, Response } from 'express';
import nanoid from 'nanoid';
import { URL } from './urls.models';
import { urlCreateSchema } from './urls.schema';
import { ZodError } from 'zod';

const handleGetAllShortUrls = async (req: Request, res: Response) => {
  const urls = await URL.find({});
  res.status(200).json(urls);
};

async function handleGenerateShortUrl(req: Request, res: Response) {
  const body = req.body;
  try {
    const shortId = nanoid.nanoid(8);
    const url = await urlCreateSchema.parseAsync({
      shortId: shortId,
      redirectUrl: body.redirectUrl,
    });
    try {
      const newUrl = await URL.create(url);
      return res.status(200).json({ id: newUrl });
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'Some Error Occured at create', err: err });
    }
  } catch (err) {
    if (err instanceof ZodError) {
      const errorMessage = err.errors.map((err) => err.message).join(', ');
      return res.status(404).json({ error: errorMessage });
    } else return res.status(404).json({ message: 'Some Error Occured' });
  }
}

const handleDeleteUrl = async (req: Request, res: Response) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndDelete({
    shortId: shortId,
  });
  if (!entry) return res.status(404).json({ error: 'Invalid Url' });
  return res.status(200).json({ message: 'URL deleted successfully!' });
};

const handleRedirectShorturl = async (req: Request, res: Response) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamps: new Date() },
      },
    },
  );
  if (!entry) return res.status(404).json({ error: 'Invalid Url' });
  return res.redirect(entry.redirectUrl);
};

const handleAnalytics = async (req:Request, res: Response) =>{
    const shortId = req.params.shortId;
    const url = await URL.findOne({shortId});
    if(!url) return res.status(404).json({ error: 'Invalid Url' });
    return res.status(200).json({
        totalClicks: url.visitHistory.length,
        analytics: url.visitHistory
    })
}

export {
  handleGenerateShortUrl,
  handleDeleteUrl,
  handleRedirectShorturl,
  handleGetAllShortUrls,
  handleAnalytics
};
