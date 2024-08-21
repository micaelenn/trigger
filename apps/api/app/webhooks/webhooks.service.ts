// internal modules
import { Webhook } from "./webhooks.model"
import { WebhookProps } from "./webhooks.types"
import { generateHashID } from '../../helpers/string'

class WebhooksService {
  async create(webhook: WebhookProps) {
    const { name, url } = webhook
    
    await Webhook.create({
      hashID: generateHashID(),
      name: name,
      url: url
    })
  }

  async getAll() {
    return await Webhook.findAll({
      attributes: ["hashID", "name", "url"],
      order: [["createdAt", "DESC"]],
    });
  }

  async delete(webhookID: string) {
    await Webhook.destroy({
      where: { hashID: webhookID }
    })
  }
}

export const webhooksService = new WebhooksService()