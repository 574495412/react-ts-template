import axios from './axios';

export const login = (data?:any) => {//定义schema
    return axios.post('api/auth/login',data);
}