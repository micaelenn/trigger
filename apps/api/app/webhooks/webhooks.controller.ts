// external modules
import { Request, Response, Router } from "express";

// internal modules
import { setEndpoint } from '../../config/application'
import { webhookMessage } from '../../helpers/messages'
import { webhooksService } from './webhooks.service'
import { tryCatch } from "../../helpers/tryCatch";

export const webhooks: Router = Router();

// POST
webhooks.post(setEndpoint('webhooks'),
  tryCatch(
    async (req: Request, res: Response) => {
      const webhook = req.body
      await webhooksService.create(webhook)
      res.status(200).send({ message: webhookMessage.success })
    }
  )
)

// GET
webhooks.get(setEndpoint('webhooks'),
  tryCatch(
    async (req: Request, res: Response) => {
      const webhooks = await webhooksService.getAll()
      res.status(200).send(webhooks)
    }
  )
)

// DELETE
webhooks.delete(setEndpoint('webhooks/:id'),
  tryCatch(
    async (req: Request, res: Response) => {
      const webhookID = req.params.id
      await webhooksService.delete(webhookID)
      res.status(200).send({ message: webhookMessage.deleted })
    }
  )
)