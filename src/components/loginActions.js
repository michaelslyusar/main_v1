import axios from 'axios';

const login = (data) => {
    return dispatch => {
        return axios.post('/',data).then(res => {
            const token = res.data.token;
            
        });
    }
}
