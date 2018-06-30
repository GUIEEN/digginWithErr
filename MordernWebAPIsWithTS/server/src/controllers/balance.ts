import { Controller } from './controller'
import { HttpServer } from '../server/httpServer'
import { Request, Response } from 'express'
import { balanceService } from '../services/balance'

export class BalanceController implements Controller {
  public initialize (httpServer: HttpServer): void {
    httpServer.get('customers', this.list.bind(this))
    httpServer.get('customer/:id', this.getById.bind(this))
    httpServer.post('customer', this.create.bind(this))
    httpServer.put('customer/:id', this.update.bind(this))
    // httpServer.del('customer/:id', this.remove.bind(this))
  }

  private async list (req: Request, res: Response): Promise<void> {
    res.send(await balanceService.list)
  }
  private async getById (req: Request, res: Response): Promise<void> {
    const balance = await balanceService.getById(req.params.id)
    res.status(balance ? 200 : 404).send(balance)
  }
  private async create (req: Request, res: Response): Promise<void> {
    res.send(await balanceService.create(req.body))
  }
  private async update (req: Request, res: Response): Promise<void> {
    res.send(await balanceService.update({ ...req.body, id: req.params.id }))
  }
  // private async remove (req: Request, res: Response): Promise<void> {
  //   try {
  //     await balanceService.delete(req.params.id)
  //     res.send(200)
  //   } catch (e) {
  //     res.send(500)
  //   }
  // }
}
