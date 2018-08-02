export const MessageBox = ({ commit }, payload) => {
  console.log(payload)
  commit('showMessageBox', payload)
}