import { db } from '../../config'
import { llg } from "llg";
export default {
    state: {

    },
    mutations: {

    },
    actions: {
        signup(context, user_data) {
            llg("signup =>action")
            db.collection('users').add(user_data).then(function (docRef) {
                llg("Document written with ID: ", docRef.id);
            })
                .catch(function (error) {
                    llg("Error adding document: ", error);
                });
        }
    },
    getters: {

    }
}