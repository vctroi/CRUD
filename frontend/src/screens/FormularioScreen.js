import React, { useState } from 'react'
// { , useEffect }
// import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
// useSelector

// import Message from '../components/Message'
// import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { info } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [nome, setNome] = useState('')

  const dispatch = useDispatch()

  // const userLogin = useSelector((state) => state.userLogin)
  // const { loading, error, userInfo } = userLogin

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(info(nome))
  }

  return (
    <FormContainer>
      <h1>CRUD</h1>
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='nome'>
          <Form.Label>Ensira um nome </Form.Label>
          <Form.Control
            type='nome'
            placeholder='Victor Sousa'
            // value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='rg'>
          <Form.Label>RG </Form.Label>
          <Form.Control
            type='number'
            placeholder='RG'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='cpf'>
          <Form.Label>CPF </Form.Label>
          <Form.Control
            type='number'
            placeholder='CPF'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='data_nascimento'>
          <Form.Label>Data Nascimento </Form.Label>
          <Form.Control
            type='number'
            placeholder='01/02/1990'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='data_admissao'>
          <Form.Label>Data admissao </Form.Label>
          <Form.Control
            type='number'
            placeholder='01/02/2022'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='funcao'>
          <Form.Label>Funcao </Form.Label>
          <Form.Control
            type='funcao'
            placeholder='Desenvolvedor'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Adicionar
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Lista
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
