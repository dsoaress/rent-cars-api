import { inject, injectable } from 'tsyringe'

import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

@injectable()
export class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(id: string) {
    await this.categoriesRepository.delete(id)
  }
}
