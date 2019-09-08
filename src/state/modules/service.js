import { db } from '../../config'
import { llg } from "llg";
export default {
    state: {
        orders: []
    },
    mutations: {
        SET_ORDERS(state, list) {
            state.orders = list
        }
    },
    actions: {
        orders(context, uid) {
            llg("service orders =>action")
            db.collection('orders')
                .where('user_id', '==', uid)
                .onSnapshot(function (querySnapshot) {
                    var list = [];
                    querySnapshot.forEach(function (doc) {
                        list.push(doc.data());
                    });
                    llg("service order | Data got: ", list)
                    context.commit('SET_ORDERS', list);
                });
        }
    },
    getters: {
        getOrders(state) {
            return state.orders
        }
    }
}