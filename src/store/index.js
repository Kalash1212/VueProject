import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentslist: [],
    selectedPage: 1,
    modalWindowId: 0,
    chartData:[['Categories', 'Costs']],
  },
  getters: {
    getPaymentsList(state){
      return state.paymentslist
    },
    getselectedPage(state){
      return state.selectedPage
    },
    getModalWindowId(state){
      return state.modalWindowId
    },
    getChartData(state){
          state.chartData.splice(1);
          for (let i of state.paymentslist){
              let FLAG = 0;
              let category = i.category;
              for (let j of state.chartData){
                  if(j[0] == category){
                      FLAG = 1;
                  }
              }
              if(FLAG == 1){
                  continue
              }
              let costs = 0;
              for (let item of state.paymentslist){
                  if (item.category == category){
                      costs += item.value
                  }
              }
              let newArr = [category, costs];
              state.chartData.push(newArr)}
              return state.chartData
  }},
  mutations: {
    setPaymentsList(state, payload){
      state.paymentslist = payload
    },
    addToPaymentsList(state, payload){
      state.paymentslist.push(payload)
    },
    changePaymentsList(state, payload){
      state.paymentslist[payload.id-1].id = payload.id;
      state.paymentslist[payload.id-1].date = payload.date;
      state.paymentslist[payload.id-1].category = payload.category;
      state.paymentslist[payload.id-1].value = payload.value;
    },
    deleteSelectedItem(state, payload){
      state.paymentslist.splice(payload-1,1);
      state.paymentslist.forEach((item,indx) => item.id = indx+1)
    },
    changeSelectedPage(state, payload){
      state.selectedPage = payload
    },
    changeModalWindowId(state, payload){
      state.modalWindowId = payload
    },
  },
  actions: {
    loadProducts({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {id:1,date:'01.01.2022',category:'food',value:160},
            {id:2,date:'03.05.2022',category:'transport',value:240},
            {id:3,date:'09.05.2022',category:'medicine',value:350},
          ])
        }, 1000)
      })
      .then((list) => commit('setPaymentsList',list))
    }
  },
  modules: {
  }
})
