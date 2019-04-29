import axios from 'axios';
import qs from 'qs'

axios.defaults.baseURL = 'http://192.168.2.28:18089/';
axios.defaults.timeout = 600000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // token 验证
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器’
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default ({
    post (url:string, data:any = {}, header?:any) {
        let config:any = {};
        header && (config.headers = { 'Content-Type': header });
        return new Promise((resolve, reject) => {
            axios.post(url, !header?qs.stringify(data):data, config)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    get (url:string, params:any = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
});