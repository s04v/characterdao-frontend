import Api from './config';

const create = (data) => {
    return Api.post('/api/character', data);
}

const getAll = () => {
    return Api.get('/api/characters');
}

const getAllPrivate = () => {
    return Api.get('/api/characters/private');
}

const get = (id) => {
    return Api.get(`/api/character/${id}`);
}

const update = (id, data) => {
    return Api.put(`/api/character/${id}`, data);
}

const remove = (id) => {
    return Api.delete(`/api/character/${id}`);
}

const helper = {
    create: create,
    getAll: getAll,
    getAllPrivate: getAllPrivate,
    get: get,
    update: update,
    remove: remove
}

export default helper;