// external modules
import { Router } from "express";

// internal modules
import { app } from '../../config/application'
import { webhooksService } from './webhooks.service'

export const webhooks: Router = Router();

// GET
webhooks.get(app.setEndpoint('webhooks'),
  async (req, res) => {
    res.status(200).send('Hello World!')
  }
)