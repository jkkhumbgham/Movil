import express from 'express';
import userRoutes from './routes/artista.routes.js';
import obrasRoutes from './routes/obras.routes.js';
import reviewsRoutes from './routes/reviews.routes.js';

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(obrasRoutes);
app.use(reviewsRoutes);

export default app;