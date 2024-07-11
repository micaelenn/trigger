// external modules
import { Router } from "express";

// internal modules
import { setEndpoint } from '../../config/application'
import { webhooksService } from './webhooks.service'

export const webhooks: Router = Router();

// POST
webhooks.post(setEndpoint('webhooks'), 
  async (req, res) => {
    res.status(200).send('Created')
  }
)

// DELETE
webhooks.delete(setEndpoint('webhooks/:id'),
  async (req, res) => {
    res.status(200).send('Deleted')
  }
)