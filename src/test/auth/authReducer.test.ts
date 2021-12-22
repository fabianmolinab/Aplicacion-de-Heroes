import {authReducer} from '../../auth/authReducer'
import {types} from '../../types/types'

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {

    const state = authReducer({logged: false}, {})

    expect(state).toEqual({logged: false})
  })

  test('debe de autenticar y colocar el name del usuario', () => {

    const action: {
      type: string
      payload: {
        name: string
      }
    } = {
      type: types.login,
      payload: {
        name: 'Fabian'
      }
    }
    const state = authReducer({logged: false}, action)

    expect(state).toEqual({logged: true, name: 'Fabian'})
  })

  test('debe de borrar el name del usuario y logged en false', () => {
    const action: {
      type: string
      payload: {
        name: string
      }
    } = {
      type: types.logout,
      payload: {
        name: 'Fabian'
      }
    }
    const state = authReducer({logged: true, name: 'Fabian'}, action)

    expect(state).toEqual({logged: false})
  })
})
