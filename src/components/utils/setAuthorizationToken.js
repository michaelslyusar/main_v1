import axios from 'axios';

export default function setAuthorizationToken() {
    
    const token = sessionStorage.getItem('token');
    console.log('TOKEN', token);
    if (token) {
        console.log("HERE");
        axios.defaults.headers.common['token'] = token;
    }

}