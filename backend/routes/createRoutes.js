import express from 'express'
const router = express.Router()
import {
  // getUsers,
  getPessoas,
  createPeassoa,
  deleteUser,
  editPessoas
} from '../controllers/userController.js'


router.route('/create').post(createPeassoa)
router.route('/read').get(getPessoas)
router.route('/edit').put(editPessoas)
router.route('/delete/:id').delete(deleteUser)

//   .put(protect, admin, updatePessoa)

export default router
