import { inject, injectable } from 'tsyringe'

import { CarsRepositoryInterface } from '../../repositories/CarsRepositoryInterface'

@injectable()
export class FindAllCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: CarsRepositoryInterface
  ) {}

  async execute() {
    return await this.carsRepository.findAll()
  }
}
