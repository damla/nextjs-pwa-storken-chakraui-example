import { getStorken } from './index.jsx'

export const totalPrice = {
  actions: () => ({
    setTotal: () =>
      getStorken('glassCount') * 22.5 + getStorken('plasticCount') * 20
  })
}
