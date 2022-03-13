import { useStorken } from '../data/storken'

export const useActions = (key) => useStorken(key).plugins.actions
