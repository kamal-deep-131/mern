import { Router } from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import createIdea from '../controllers/createidea.controller.js'
import displayAllIdeas from '../controllers/displayAllIdeas.controller.js'
import updateIdea from '../controllers/updateIdea.controller.js'

const router = Router()
router.post('/create', verifyToken, createIdea)
router.get('/display', displayAllIdeas)
router.patch('/edit/:id', verifyToken, updateIdea)

export default router