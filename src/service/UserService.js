import HttpCommon from "./HttpCommon"
import { ErrorWrapper, ResponseWrapper } from "./util"
export default class UserService {

    constructor() {
        this.http = new HttpCommon("users")
    }

    findAll = async () => {
        try {
            const response = await this.http.get()
            return new ResponseWrapper(response).data
        } catch (error) {
            new ErrorWrapper(error)
        }
    }

    update = async (id, data = {}) => {
        try {
            const response = await this.http.patch(id, data)
            return new ResponseWrapper(response).data
        } catch (error) {
            new ErrorWrapper(error)
        }
    }

    create = async (data = {}) => {
        try {
            const response = await this.http.post("", data)
            return new ResponseWrapper(response).data
        } catch (error) {
            new ErrorWrapper(error)
        }
    }

    delete = async (id) => {
        try {
            const response = await this.http.delete(id)
            return new ResponseWrapper(response).data
        } catch (error) {
            new ErrorWrapper(error)
        }
    }
}