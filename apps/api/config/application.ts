class Application {
  setEndpoint(endpoint: string) {
    return `/api/v1/${endpoint}`
  }
}

export const app = new Application()