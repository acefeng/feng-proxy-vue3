import { createStore } from "vuex";
import { UPDATE_MAIN_NAV_LIST } from './handleTypes';
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    // proxy_is_open: false,
    navMain: {},
    proxyList: [],
    test: 2
  },
  mutations: {
    [UPDATE_MAIN_NAV_LIST](state: any, data: any) {
      console.log('触发', UPDATE_MAIN_NAV_LIST)
    }
  },
  actions: {
    [UPDATE_MAIN_NAV_LIST](context: any, type: any, data: any) {
      if (type === 'add') {
        // console.log(_id)
      } else if (type === 'delete') {
        console.log('删除')
      } else if (type === 'update') {
        console.log('修改')
      }
    },
  },
  getters: {
    filterTableDate: state => {
      return state.proxyList
    }
  },
  modules: {},
  strict: debug
});
