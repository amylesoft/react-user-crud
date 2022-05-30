import HttpCommon from "./HttpCommon"
import { ErrorWrapper, ResponseWrapper } from "./util"
export default class UserService {

    constructor() {
        this.http = new HttpCommon("users")
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.http
                .get()
                .then((response) => {
                    resolve(new ResponseWrapper(response).data)
                })
                .catch((error) => {
                    reject(new ErrorWrapper(error))
                })
        })
    }

    update(id, data = {}) {
        return new Promise((resolve, reject) => {
            this.http
                .patch(id, data)
                .then((response) => {
                    resolve(new ResponseWrapper(response).data)
                })
                .catch((error) => {
                    reject(new ErrorWrapper(error))
                })
        })
    }

    create(data = {}) {
        return new Promise((resolve, reject) => {
            this.http
                .post("", data)
                .then((response) => {
                    resolve(new ResponseWrapper(response).data)
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    reject(new ErrorWrapper(error))
                })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.http
                .delete(id)
                .then((response) => {
                    resolve(new ResponseWrapper(response).data)
                })
                .catch((error) => {
                    reject(new ErrorWrapper(error))
                })
        })
    }
}