import { Router } from 'express'

import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { deleteSpecificationController } from '../modules/cars/useCases/deleteSpecification'
import { findAllSpecificationsController } from '../modules/cars/useCases/findAllSpecifications'
import { findSpecificationController } from '../modules/cars/useCases/findSpecification'
import { updateSpecificationController } from '../modules/cars/useCases/updateSpecification'

const specificationsRouter = Router()

specificationsRouter.post('/', (req, res) => createSpecificationController.handle(req, res))
specificationsRouter.get('/', (req, res) => findAllSpecificationsController.handle(req, res))
specificationsRouter.get('/:id', (req, res) => findSpecificationController.handle(req, res))
specificationsRouter.put('/:id', (req, res) => updateSpecificationController.handle(req, res))
specificationsRouter.delete('/:id', (req, res) => deleteSpecificationController.handle(req, res))

export { specificationsRouter }
