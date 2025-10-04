

import axios from "axios"


class ApiSerivces {


    constructor(){
        this.axiosInstance= axios.create({
            baseURL:"",
            timeout:1000,
            headers:{'X-Custome-Header':"foobar"}
        })
    }

}