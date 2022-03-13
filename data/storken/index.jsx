import { create as createStore } from 'storken'
import Actions from 'storken-actions'
import { totalPrice } from './actions'

export const [useStorken, getStorken] = createStore({
  initialValues: {
    glassCount: 0,
    plasticCount: 0,
    totalPrice: 0
  },
  plugins: {
    actions: Actions
  },
  storkenOptions: {
    totalPrice
  }
})
