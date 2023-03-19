import { SET_MORE, SET_ONE } from '../mutations/mutations-types'

const actions = {
  setOneAction: ({ commit }, payload) => {
    return commit(SET_ONE, payload)
  },
  setMoreAction: ({ commit }, payload) => {
    return commit(SET_MORE, payload)
  }
}
export default actions
