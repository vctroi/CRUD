import asyncHandler from 'express-async-handler'
import Pessoas from '../models/pessoaModel.js'


const getPessoas = asyncHandler(async (req, res) => {
  const users = await Pessoas.find({})
  res.json({ users })
})


const createPeassoa = asyncHandler(async (req, res) => {
  const response = req.body
  // const userExists = await User.findOne({ cpf })

  // if (userExists) {
  //   res.status(400)
  //   throw new Error('User already exists')
  // }

  // console.log(d.nome);
  const user = await Pessoas.create(response.nome)

  // if (user) {
  //   res.status(201).json({
  //     _id: user._id,
  //     nome,
  //     // token: generateToken(user._id),
  //   })

  // } else {
  //   res.status(400)
  //   throw new Error('Dados invalidos')
  // }

})


const deleteUser = asyncHandler(async (req, res) => {
  const user = await Pessoas.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'Usuário removido' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// const createPeassoa = asyncHandler(async (req, res) => {
//   const { nome, rg, cpf, data_nascimento, data_admissao, funcao } = req.body

//   const userExists = await User.findOne({ cpf })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   const user = await User.create({
//     nome,
//     rg,
//     cpf,
//     data_nascimento,
//     data_admissao,
//     funcao
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       nome,
//       rg,
//       cpf,
//       data_nascimento,
//       data_admissao,
//       funcao
//       // token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
// const readPeassoa = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     res.json({
//       _id: user._id,
//       nome,
//       rg,
//       cpf,
//       data_nascimento,
//       data_admissao,
//       funcao
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
// const updatePessoa = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email


//     nome = req.body.nome || user.nome
//     rg = req.body.rg || user.rg
//     cpf = req.body.cpf || user.cpf
//     data_nascimento = req.body.data_nascimento || user.data_nascimento
//     data_admissao = req.body.data_admissao || user.name
//     funcao = req.body.funcao || user.funcao


//     const updatedUser = await user.save()

//     res.json({
//       _id: user._id,
//       nome,
//       rg,
//       cpf,
//       data_nascimento,
//       data_admissao,
//       funcao
//       // token: generateToken(updatedUser._id),
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })



export {
  getPessoas,
  createPeassoa,
  deleteUser,
  // readPeassoa,
  // updatePessoa,
}
