import axios from '@/utils/axios';

export const httpMethod = Object.freeze({
    delete: 'delete',
    get: 'get',
    patch: 'patch',
    post: 'post',
    put: 'put',
});

export function callAPI(method, uri, params, headers) {
    const obj = {
        delete: { data: params },
        get: { params },
        patch: params,
        post: params,
        put: params,
    };

    return axios[method](uri, obj[method], { headers });
}

export function uploadFile(uri, formData, progressCallback, headers) {
    let onUploadProgress = () => {};

    if (progressCallback && typeof progressCallback === 'function') {
        onUploadProgress = progressEvent => {
            const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            progressCallback(percentCompleted);
        };
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            ...headers,
        },
        onUploadProgress,
    };

    return axios.post(uri, formData, config);
}

export const apiPath = {
    member: '/v1/members',
};
