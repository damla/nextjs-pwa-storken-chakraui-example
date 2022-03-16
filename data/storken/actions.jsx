import { getStorken } from './index.jsx'

export const totalPriceActions = {
  actions: () => ({
    setTotal: () =>
      getStorken('glassCount') * 22.5 + getStorken('plasticCount') * 20
  })
}
