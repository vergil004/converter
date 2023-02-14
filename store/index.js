export const state = () => ({
  valutes: {},
  isLoading: true,
})

export const mutations = {
  SET_VALUES: (state, data) => Object.assign(state, data),
}

export const actions = {
  fetchValues({ commit }) {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(
      async (response) => {
        const data = await response.json()
        commit('SET_VALUES', { valutes: data.Valute, isLoading: false })
      }
    )
  },
}

export const getters = {
  allValutes: (state) => {
    const data = []
    const values = Object.entries(state.valutes)
    for (let i = 0; i < values.length; i++) {
      data.push({ name: values[i][0], data: values[i][1] })
    }
    return data
  },
}
