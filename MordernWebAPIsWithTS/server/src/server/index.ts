import { HttpServer } from './httpServer'
import * as express from 'express'
import bodyParser from 'body-parser'
import Router from 'express-promise-router'
import { CONTROLLERS } from '../controllers'

export class ApiServer implements HttpServer {
  private router = Router()

  public get (url: string, requestHandler: express.RequestHandler): void {
    this.addRoute('get', url, requestHandler)
  }
  public post (url: string, requestHandler: express.RequestHandler): void {
    this.addRoute('post', url, requestHandler)
  }
  public del (url: string, requestHandler: express.RequestHandler): void {
    this.addRoute('del', url, requestHandler)
  }
  public put (url: string, requestHandler: express.RequestHandler): void {
    this.addRoute('put', url, requestHandler)
  }

  public start (port: number): void {
    const app = express()
    CONTROLLERS.forEach(controller => controller.initialize(this))
    app.use(bodyParser.json())
    app.listen(port, () => console.log(`Server is running`))
  }

  private addRoute (method: 'get' | 'post' | 'put' | 'del', url: string, requestHandler: express.RequestHandler): void {
    this.router[method](url, async (req, res, next) => {
      try {
        await requestHandler(req, res, next)
      } catch (e) {
        console.log(e)
        res.send(500, e)
      }
    })
    console.log(`Added route ${method.toUpperCase()} ${url}`)
  }

  // private addControllers (): void {
  //   CONTROLLERS.forEach(controller => controller.initialize(this))
  // }
}
