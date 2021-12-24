import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { PrivateRoute } from '../../routers/PrivateRoute'

configure({ adapter: new Adapter() })

describe('Pruebas en <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  test('debe demostrar que el componente si está autenticado y guardar en el Local Storage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Hola</span>}
          {...props}
        />
      </MemoryRouter>
    )
    expect(wrapper.find('span').exists()).toBe(true)
  })
})
