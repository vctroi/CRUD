import axios from 'axios'
import {

  USER_CAD_FAIL,
  USER_CAD_REQUEST,
  USER_CAD_SUCCESS,

} from '../constants/userConstants'

export const info = (nome, rg, cpf, dataNascimento, dataAdmissao, funcao) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CAD_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
    // console.log(nome);
    const { data } = await axios.post(
      'http://127.0.0.1:5000/api/create',
      {
        nome,
        rg,
        cpf,
        dataNascimento,
        dataAdmissao,
        funcao
      },
      config
    )

    dispatch({
      type: USER_CAD_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: USER_CAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


//readPeassoa
// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DETAILS_REQUEST,
//     })

//     const {
//       userCAD: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(`/api/users/${id}`, config)

//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: message,
//     })
//   }
// }
//updatePessoa
// export const updateUserProfile = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_PROFILE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(`/api/users/profile`, user, config)

//     dispatch({
//       type: USER_UPDATE_PROFILE_SUCCESS,
//       payload: data,
//     })
//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     })
//     localStorage.setItem('userInfo', JSON.stringify(data))
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_UPDATE_PROFILE_FAIL,
//       payload: message,
//     })
//   }
// }


// export const updateUser = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_UPDATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(`/api/users/${user._id}`, user, config)

//     dispatch({ type: USER_UPDATE_SUCCESS })

//     dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

//     dispatch({ type: USER_DETAILS_RESET })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_UPDATE_FAIL,
//       payload: message,
//     })
//   }
// }



