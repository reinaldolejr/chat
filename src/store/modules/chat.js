
import Api from '@/api'
import moment from 'moment';

const state = {
    list: [],
    nickname: ""
};

const mutations = {
    setList(state, val) {
        state.list = val;
    },
    setNickname(state, val) {
        state.nickname = val;
    }
};

const getters = {
    list: state => state.list,
    nickname: state => state.nickname
};

const actions = {
    
    async getAll({ commit }) {
        let result = await Api().get('post');
        result.data.forEach(x=> x.date = moment(x.date).format("DD/MM/YYYY HH:mm"));
      
        commit("setList", result.data);
    },
    async save({ dispatch }, request) {
        let result = await Api().post('post', request);
        await dispatch("getAll");
    },
    async setNickname({ commit }, nickname) {
        commit("setNickname", nickname);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
