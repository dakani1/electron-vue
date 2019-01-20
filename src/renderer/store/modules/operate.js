// import axios from 'axios'
// const baseUrl = process.env.ROOTURL || ''
// axios.create({
//   baseURL: baseUrl,
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// const oApi = {
//   'topics': '/topics'
// }

// function _get ({api, data}) {
//   console.log(3333333333333)
//   return new Promise((resolve, reject) => {
//     const url = oApi[api]
//     const allJson = {
//       url,
//       params: data
//     }
//     if (data.headers) {
//       Object.assign(allJson, {headers: data.headers}, {})
//     }
//     console.log(111111111111)
//     axios(allJson).then((res) => {
//       resolve(res)
//       console.log(4444444444)
//     }).catch((error) => {
//       reject(error)
//       console.log(555555555)
//     })
//   })
// }

let state = {
  main: 55,
  allSort: {
    ask: 'ask',
    share: 'share',
    job: 'job',
    dev: 'dev'
  }
}
let getters = {
  allSort (state) {
    return state.allSort
  },
  getMain (state) {
    return state.main
  }
}
let mutations = {
  change ({commit, state}, data) {
    state.main = data
  }
}
const actions = {
  fetalldaa () {
    console.log(11111)
  }
}
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
