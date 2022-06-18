import Api from './config';

const signIn = (data) => {
    return Api.post('/api/account/signin', data);
}

const signUp = (data) => {
    return Api.post('/api/account/signup', data);
}

const helper = {
    signIn: signIn,
    signUp: signUp
}

export default helper;