export const state = () => ({
  actionRedirect: false,
  prevUrl: '',
  second: 0,
  test: []
})

export const getters = {
  g_prevUrl: (state) => {
    return state.prevUrl
  },
  g_second: (state) => {
    return state.second
  },
  g_actionRedirect: (state) => {
    return state.actionRedirect
  },
}

export const mutations = {
  m_prevUrl(state, payload) {
    localStorage.setItem('prevUrl', payload);
    state.prevUrl = payload
  },
  m_actionRedirect(state, payload) {
    state.actionRedirect = payload
  },
  m_second(state, payload) {
    localStorage.setItem('second', payload);
    state.second = payload
  },
}

export const actions = {
  a_prevUrl({state, commit}, previewUrl) {
    commit('m_actionRedirect', true);
    commit('m_prevUrl', previewUrl);
  },
}
