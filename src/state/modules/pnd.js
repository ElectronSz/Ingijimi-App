import { db } from '../../config'
import { llg } from "llg";
export default {
    state: {
        
    },
    mutations: {

    },
    actions: {
        pnd_order(context,order) {
            llg("order =>action")
            db.collection('orders').add(order).then(function (docRef) {
                llg("Order written with ID: ", docRef.id);
                db.collection("orders").doc(docRef.id).set({
                    doc_id: docRef.id
                },{
                    merge: true,
                  })
            })
                .catch(function (error) {
                    llg("Error adding order: ", error);
                });
        }
    },
    getters: {

    }
}