export const MessageBox = ({ commit }, payload) => {
  commit('showMessageBox', payload)
}

export const goBack = ({ commit }, payload) => {
  commit('checkGoBack', payload)
}