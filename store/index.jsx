import { create as createStore } from 'storken'

export const [useStorken] = createStore({
  initialValues: {
    glassCount: 0,
    plasticCount: 0,
    glassPrice: 0,
    plasticPrice: 0,
    totalPrice: 0
  }
})
