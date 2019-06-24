import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);


const store = () => {
    return new Vuex.Store({
        state: {
            active: "home",

        },
        action: {



        },
        mutations: {
            change(state, val) {
                state.active = val;
            }
        }
    })
}

export default store