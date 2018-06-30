import { Balance } from '../models/balance'
import { DatabaseProvider } from '../database'

export class BalanceService {
  public async getById (id: number): Promise<Balance> {
    const connection = await DatabaseProvider.getConnection()
    return connection.getRepository(Balance).findOne(id)
  }

  public async create (balance: Balance): Promise<Balance> {
    const newBalance = new Balance()
    newBalance.uniqueName = balance.uniqueName
    newBalance.amount = balance.amount

    const connection = await DatabaseProvider.getConnection()
    return connection.getRepository(Balance).save(newBalance)
  }

  public async list (): Promise<Balance[]> {
    const connection = await DatabaseProvider.getConnection()
    return connection.getRepository(Balance).find()
  }

  public async update (balance: Balance): Promise<Balance> {
    console.log(balance)
    const connection = await DatabaseProvider.getConnection()
    const repository = connection.getRepository(Balance)
    const entity = await repository.findOne(balance.id)
    entity.amount = balance.amount
    entity.uniqueName = balance.uniqueName
    return repository.save(entity)
  }

  public async delete (id: number): Promise<void> {
    const connection = await DatabaseProvider.getConnection()
    const repository = connection.getRepository(Balance)
    const entity = await repository.findOne({ id })
    repository.remove(entity)
  }
}

export const balanceService = new BalanceService()
