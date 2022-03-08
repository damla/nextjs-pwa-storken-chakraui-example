import { create as createStore } from 'storken'

export const [useStorken] = createStore({
  initialValues: {
    glassPrice: 0,
    plasticPrice: 0,
    totalPrice: 0
  }
})
