import {
  USER_CAD_FAIL,
  USER_CAD_REQUEST,
  USER_CAD_SUCCESS,
} from '../constants/userConstants'

export const pessoasReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CAD_REQUEST:
      return { loading: true }
    case USER_CAD_SUCCESS:
      return { loading: false, pessoaInfo: action.payload }
    case USER_CAD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
