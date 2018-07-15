import express from 'express'

export interface HttpServer {
  get (url: string, requestHandler: express.RequestHandler): void

  post (url: string, requestHandler: express.RequestHandler): void

  del (url: string, requestHandler: express.RequestHandler): void

  put (url: string, requestHandler: express.RequestHandler): void
}
