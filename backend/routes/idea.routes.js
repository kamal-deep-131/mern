import { Router } from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import createIdea from '../controllers/createidea.controller.js'
import displayAllIdeas from '../controllers/displayAllIdeas.controller.js'
import updateIdea from '../controllers/updateIdea.controller.js'
import deleteIdea from '../controllers/deleteIdea.controller.js'
import verifiedOwnerIdeas from '../controllers/verifiedOwnerIdeas.controller.js'
import displaySingleData from '../controllers/displaySingleIdea.js'

const router = Router()
router.post('/create', verifyToken, createIdea)
router.get('/display', displayAllIdeas)
router.patch('/edit/:id', verifyToken, updateIdea)
//get single data
router.get('/:id', displaySingleData)
//get all ideas by author
router.post('/profile', verifyToken, verifiedOwnerIdeas)
router.delete('/delete/:id', verifyToken, deleteIdea)

export default router