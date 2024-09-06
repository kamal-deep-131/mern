import { Router } from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import createIdea from '../controllers/createidea.controller.js'

const router = Router()
router.post('/create', verifyToken, createIdea)

export default router