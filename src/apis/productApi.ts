import instance from './axiosClient';

const url = '/products'

export const gets = () => {
    return instance.get(url)
}
export const get = (id : string) => {
    return instance.get(`${url}/${id}`)
}