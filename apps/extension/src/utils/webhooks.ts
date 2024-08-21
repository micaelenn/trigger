import { defaultFetchAPIRequest, defaultGETRequest } from "./actions"
import { WebhookProps } from "../types/webhook.props"
import { Endpoints } from "./application"

class Webhooks {
  async create(webhook: WebhookProps) {
    const endpoint = Endpoints.webhooks
    const body = { name: webhook.name, url: webhook.url }
    return await defaultFetchAPIRequest(endpoint, 'POST', body)
  }

  async getAll() {
    const endpoint = Endpoints.webhooks
    return await defaultGETRequest(endpoint)
  }

  async delete(webhookID: string) {
    const endpoint = `${Endpoints.webhooks}/${webhookID}`
    return await defaultFetchAPIRequest(endpoint, 'DELETE')
  }

  async trigger(webhook: string) {
    return await defaultGETRequest(webhook)
  }
}

export const webhooks = new Webhooks()