import virtserver from '@/__services/VirtualServerAxios'

const state = {
    editorchoice: [],
    latest_articles: [],
    latest_review: []
}

const getters = {
    EDITORCHOICE : state => {
        return state.editorchoice;
    },
    LATESTARTICLES : state => {
        return state.latest_articles;
    },
    LATESTREVIEW : state => {
        return state.latest_review;
    }
}

const mutations = {
    SET_EDITORCHOICE : (state, payload) => {
        state.editorchoice = payload
    },
    SET_LATESTARTICLE : (state, payload) => {
        state.latest_articles = payload
    },
    SET_LATESTREVIEW : (state, payload) => {
        state.latest_review = payload
    }
}

const actions = {
    GET_DATAHOME : async(context)=> {
        virtserver.get('hqms/FDN-WP/0.1/wp/').then(response => {
            context.commit('SET_EDITORCHOICE', response.data["editor's choice"])
            context.commit('SET_LATESTARTICLE', response.data["latest articles"])
            context.commit('SET_LATESTREVIEW', response.data["latest review"])

        }).catch((error)=> {
            console.log(error)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}