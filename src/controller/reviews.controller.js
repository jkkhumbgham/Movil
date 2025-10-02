import { Artista } from "../models/Artista.js";
import { Obra } from "../models/Obra.js";
import { Review } from "../models/Review.js";

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll(
            { include: [{
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
            {
                model: Obra,
                as: 'obra',
                attributes: ['titulo']
            }]
         });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id, 
            { include: [{
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
            {
                model: Obra,
                as: 'obra',
                attributes: ['titulo']
            }]
         });
        if (!review) {
            return res.sendStatus(404);
        }
        return res.json(review);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        return res.json(newReview);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.sendStatus(404);
        }
        await review.update(req.body);
        return res.json(review);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.sendStatus(404);
        }
        await review.destroy();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getReviewsByObraId = async (req, res) => {
    try {
        const obraId = req.params.obraId;
        const reviews = await Review.findAll({ where: { obraId } , 
            include: [{
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
            {
                model: Obra,
                as: 'obra',
                attributes: ['titulo']
            }]
         });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getReviewsByArtistaId = async (req, res) => {
    try {
        const artistaId = req.params.artistaId;
        const reviews = await Review.findAll({ where: { artistaId } , 
            include: [{
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
            {
                model: Obra,
                as: 'obra',
                attributes: ['titulo']
            }]
         });
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}