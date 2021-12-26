import type { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import type { Specification } from '../../models/Specification'
import type { Request, Response } from 'express'

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Specification>> {
    const { name, description } = req.body
    const specification = await this.createSpecificationUseCase.execute({ name, description })
    return res.status(201).json(specification)
  }
}