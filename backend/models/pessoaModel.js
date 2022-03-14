import mongoose from 'mongoose'

// Quantidade de caracteres em cada campo

const userSchema = mongoose.Schema(
  {
    nome: {
      type: String,
    },
    rg: {
      type: Number,
    },
    cpf: {
      type: Number,
      // required: true,
      // unique: true,
    },
    data_nascimento: {
      type: Number,

    },
    data_admissao: {
      type: Number,

    },
    funcao: {
      type: String,

    },
  },
  {
    timestamps: true,
  }
)


const Pessoas = mongoose.model('Pessoas', userSchema)

export default Pessoas
