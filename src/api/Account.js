import Api from './config';

const signIn = (data) => {
    return Api.post('/api/account/signin', data);
}

const signUp = (data) => {
    return Api.post('/api/account/signup', data);
}

const verify = (token) => {
    return Api.get(`/api/account/verify/${token}`);
}

const helper = {
    signIn: signIn,
    signUp: signUp,
    verify: verify
}

export default helper;