import { Router } from "express";
import { createReview, getReview, getReviews, updateReview, deleteReview, getReviewsByArtistaId, getReviewsByObraId } from "../controller/reviews.controller.js";

const router = Router();

router.get("/reviews", getReviews)

router.get("/reviews/:id", getReview )

router.get("/artista/:artistaId/reviews", getReviewsByArtistaId )

router.get("/obra/:obraId/reviews", getReviewsByObraId )

router.post("/reviews", createReview)

router.put("/reviews/:id", updateReview)

router.delete("/reviews/:id", deleteReview)

export default router;
