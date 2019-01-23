import axios from 'axios'
const baseUrl = process.env.ROOTURL || ''
const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})
const oApi = {
  'topics': '/api/v1/topics'
}

function _get ({url, data}) {
  return new Promise((resolve, reject) => {
    const allJson = {
      url,
      params: data
    }
    Axios(allJson).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

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
  FETCH_GET_ALL ({commit, state}, queryData) {
    return new Promise((resolve, reject) => {
      const url = oApi[queryData.api]
      const data = queryData.data
      _get({url, data}).then((res) => {
        if (res.status === 200) {
          return resolve(res.data)
        } else {
          return reject(res)
        }
      }).catch((err) => {
        return reject(err)
      })
    })
  }
}
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
