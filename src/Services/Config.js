import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://produtos-api-lsantos.herokuapp.com/api/'
})