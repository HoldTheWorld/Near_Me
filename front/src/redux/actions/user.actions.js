import { useLayoutEffect } from 'react'
import { createSearchParams } from 'react-router-dom'
import { CHECK_USER, REGISTER_USER, SET_USER, SET_USER_ERROR, USER_LOGOUT, SET_USER_ALL, SET_USER_UPDATE_ERROR } from '../types'

const userError = (error) => ({
  type: SET_USER_ERROR,
  payload: { error }
})

const userUpdateError = (error) => ({
  type: SET_USER_UPDATE_ERROR,
  payload: { error }
})

export const registerNewUser = (user) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/sign_up`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    if (response.status === 200) {
      const newUser = await response.json()
      dispatch({
        type: REGISTER_USER,
        payload: { user: newUser }
      })
    } else {
      dispatch(userError('Вы ввели неверные данные'))
    }
  } catch (error) {
    dispatch(userError('Ошибка при связи с сервером'))
  }
}

export const checkUser = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/check`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (response.status === 200) {
      const { id, name, email } = await response.json()
      dispatch({
        type: CHECK_USER,
        payload: { id, name, email }
      })
    }
  } catch (error) {
    console.log(error);
  }    
}

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    if (response.status === 200) {
      const result = await response.json()
      dispatch({
        type: SET_USER,
        payload: { user: result }
      })
    } else {
      dispatch(userError('Неверный логин или пароль'))
    }

  } catch (err) {
    dispatch(userError('Ошибка при связи с сервером'))
  }
}

export const userLogout = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/logout`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (response.status === 200) {
      dispatch({
        type: USER_LOGOUT
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const getUser = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const currUser = await response.json()
    dispatch({
      type: SET_USER_ALL,
      payload: { user: currUser}
    })
  } catch(err) {
    console.log(err);
  }
}

export const updateUserinDB = (arg) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/${arg.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(arg)
  })  
  } catch(err) {
    console.log(err);
  }
}
