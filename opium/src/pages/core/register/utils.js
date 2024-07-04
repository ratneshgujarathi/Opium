import { apiPath } from "../../../constants/global-constants"
import request from "../../../utils/request-handler"

export const registerApi = (data) => {
    const url = apiPath + "api/user/register";
    console.log(url);
    return new Promise((resolve, reject) => {
        request.post(url, data).then((res) => {
            if (res.data.error.code == 1) {
                reject({ data: {}, msg: res.data.error.message.description })
            } else {
                resolve({ data: res.data.data, msg: "User Registered Successfully" })
            }
        }).catch((err) => {
            console.log(err);
            reject({ data: {}, msg: "Something Went Wrong" })
        })
    })
}