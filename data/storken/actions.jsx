import { getStorken } from './index.jsx'

export const totalPriceActions = {
  actions: () => ({
    setTotal: () =>
      getStorken('glassCount') * 30 + getStorken('plasticCount') * 24
  })
}
