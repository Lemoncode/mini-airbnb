import { Router } from 'express';
import { houseRepository } from 'dals';
import { authorizationMiddleware } from 'pods/security';
import {
  mapReviewsFromApiToModel,
  mapReviewsFromModelToApi,
  mapListHouseFromModeltoApi,
  mapHouseFromModelToApi,
  mapListReviewsFromModelToApi,
} from './house.mappers';

export const houseApi = Router();

houseApi

  .get('/', authorizationMiddleware(), async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const country = req.query.country
        ? `${String(req.query.country).charAt(0).toUpperCase()}${String(
            req.query.country
          ).slice(1)}`
        : null;
      const houseList = await houseRepository.getHouseList(
        page,
        pageSize,
        country
      );
      res.send(mapListHouseFromModeltoApi(houseList));
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', authorizationMiddleware(), async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })

  .get('/:id/reviews', authorizationMiddleware(), async (req, res, next) => {
    try {
      const { id } = req.params;
      const reviewList = await houseRepository.getReviewsList(id);
      res.send(mapListReviewsFromModelToApi(reviewList));
    } catch (error) {
      next(error);
    }
  })

  .post(
    '/:id/reviews',
    authorizationMiddleware(['admin', 'standard-user']),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const modelReview = mapReviewsFromApiToModel({ ...req.body });
        const newReview = await houseRepository.insertReview(modelReview, id);
        res.status(201).send(mapReviewsFromModelToApi(newReview));
      } catch (error) {
        next(error);
      }
    }
  );
