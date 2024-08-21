const apiBaseUrl = `${import.meta.env.VITE_API_URL}/api/v1`

export class Endpoints {
  static webhooks: string = `${apiBaseUrl}/webhooks`
}