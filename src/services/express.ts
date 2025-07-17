import express from 'express';
import cors from 'cors';

import authorizeRequest from 'src/middleware/authorizeRequest';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(authorizeRequest);
