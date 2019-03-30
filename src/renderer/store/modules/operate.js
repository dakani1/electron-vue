import axios from 'axios'
const baseUrl = process.env.ROOTURL || ''
let token = '9800be4a-154f-4db7-b498-f5dfaff60f07'
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
  main: 100,
  allSort: {
    ask: '问答',
    share: '分享',
    job: '招聘',
    dev: '客户端测试'
  }
}
let getters = {
  getAllSort (state) {
    return 'allSort operate'
  },
  getMain (state) {
    return state.main
  },
  testGetter (state) {
    return state.allSort
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
  },
  testAction ({ commit }) {
    console.log(3333)
    commit('counter/testMuta')
  }

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
