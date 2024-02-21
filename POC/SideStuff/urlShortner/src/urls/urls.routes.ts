import { Request, Response, Router } from 'express';
import { URL } from './urls.models';
import {
  handleDeleteUrl,
  handleGenerateShortUrl,
  handleGetAllShortUrls,
  handleRedirectShorturl,
  handleAnalytics
} from './urls.handler';

const urlRouter = Router();

urlRouter
  .route('/')
  .get(handleGetAllShortUrls)
  .post(handleGenerateShortUrl);

urlRouter
  .route('/:shortId')
  .get(handleRedirectShorturl)
  .delete(handleDeleteUrl);

urlRouter
    .route("/analytics/:shortId").get(
        handleAnalytics
    )

export { urlRouter };
