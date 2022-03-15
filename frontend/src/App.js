import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Badge, Button, Container, ListGroup, Form, Row, Col } from 'react-bootstrap'
// InputGroup, FormControl
import FormContainer from './components/FormContainer'
import { useDispatch } from 'react-redux'
import { edit, info } from './actions/userActions'
import axios from 'axios'

// export const Update = () => {

//   const submitHandler = (e) => {
//     const [editeNome, setEditNome] = useState('')
//     const [rg, setRg] = useState('')
//     const [cpf, setCpf] = useState('')
//     const [dataNascimento, setDataNascimento] = useState('')
//     const [dataAdmissao, setDataAdmissao] = useState('')
//     const [funcao, setFuncao] = useState('')

//     dispatch(info({
//       editeNome,
//       rg,
//       cpf,
//       dataNascimento,
//       dataAdmissao,
//       funcao
//     }))
//   }

// return (
//   // 
//   <Form onSubmit={submitHandler} >
//     <Form.Group controlId='nome'>
//       <Form.Control
//         type='text'
//         placeholder='Digite um valor no campo'
//         onChange={(e) => setEditNome(e.target.value)}
//       ></Form.Control>
//       <Button type='submit' variant='warning'>
//         Editar
//       </Button>
//     </Form.Group>
//   </Form>

// );
// };


const App = () => {
  const [nome, setNome] = useState('')
  const [editarNome, setEditNome] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [dataAdmissao, setDataAdmissao] = useState('')
  const [funcao, setFuncao] = useState('')
  const [respApi, setRespApi] = useState([])

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(info({
      nome,
      rg,
      cpf,
      dataNascimento,
      dataAdmissao,
      funcao
    }))
  }

  const submitEditHandler = (e) => {
    e.preventDefault()
    // console.log("Editar", editarNome);
    dispatch(edit({
      id: "622e1362606f03cde0751920",
      editarNome,
      // rg,
      // cpf,
      // dataNascimento,
      // dataAdmissao,
      // funcao
    }))
  }

  useEffect(() => {
    const getPessoas = (e) => {
      axios.get('http://127.0.0.1:5000/api/read').then(resp => {
        setRespApi(resp.data.users);
      });
    }
    getPessoas()
  }, [])

  const deletePessoa = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/delete/${id}`);
  }

  return (
    <Router>
      <main className='py-3'>
        <Container>
          <FormContainer>
            <h1>CRUD</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='nome'>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Victor Sousa'
                  onChange={(e) => setNome(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='rg'>
                <Form.Label>RG </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='RG'
                  onChange={(e) => setRg(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='cpf'>
                <Form.Label>CPF </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='CPF'
                  onChange={(e) => setCpf(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='data_nascimento'>
                <Form.Label>Data Nascimento </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='01/02/1990'
                  onChange={(e) => setDataNascimento(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='data_admissao'>
                <Form.Label>Data admissao </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='01/02/2022'
                  onChange={(e) => setDataAdmissao(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='funcao'>
                <Form.Label>Funcao </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Desenvolvedor'
                  onChange={(e) => setFuncao(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type='submit' variant='primary'>
                Adicionar
              </Button>
            </Form>
            <Row className='py-3'>
              <Col>
                {respApi.map(element =>
                  <ListGroup key={element._id}>
                    <Badge className="mt-6">ID: {element._id} </Badge>
                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Nome: </span>{element.nome}
                    </ListGroup.Item>

                    <Form onSubmit={submitEditHandler}>
                      <FormContainer>
                        <Form.Group controlId='nome'>
                          <Form.Label>Editar nome:</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Editar'
                            onChange={(e) => setEditNome(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </FormContainer>
                      <Button type='submit' variant='warning'>
                        Editar
                      </Button>
                    </Form>


                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Rg: </span>{element.rg}
                    </ListGroup.Item>
                    {/* <Update /> */}
                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Cpf: </span>{element.cpf}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Data Nascimento: </span>{element.dataNascimento}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Data Admissao: </span>{element.dataAdmissao}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{ fontWeight: "bold", color: "black", marginRight: "20px", fontSize: "20px" }}>Função: </span>{element.funcao}
                    </ListGroup.Item>
                    {/* <Route path="/update" component={updatePessoa} ></Route> */}
                    {/* <button
                      onClick={() => {
                        () => history.push("/update");
                      }}
                    >
                      Editar
                    </button> */}

                    <Button variant="danger" className="mt-4" onClick={() => deletePessoa(element._id)}>Excluir</Button>
                  </ListGroup>
                )}
              </Col>
            </Row>
          </FormContainer>
        </Container>
      </main>
    </Router >
  )
}

export default App


