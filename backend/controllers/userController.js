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


const editPessoas = asyncHandler(async (req, res) => {
  const editRes = req.body

  const user = await Pessoas.findById(editRes.editarNome.id)

  // if (user) {

  const nome = req.body.editarNome || user.nome
  // rg = req.body.rg || user.rg
  // cpf = req.body.cpf || user.cpf
  // data_nascimento = req.body.data_nascimento || user.data_nascimento
  // data_admissao = req.body.data_admissao || user.name
  // funcao = req.body.funcao || user.funcao


  const updatedUser = await user.save()

  Pessoas.
    console.log(updatedUser);

  res.json({
    _id: user._id,
    nome,
    // rg,
    // cpf,
    // data_nascimento,
    // data_admissao,
    // funcao
    // token: generateToken(updatedUser._id),
  })

  // } else {
  //   res.status(404)
  //     throw new Error('User not found')
}
)


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


export {
  getPessoas,
  createPeassoa,
  deleteUser,
  editPessoas,
}
