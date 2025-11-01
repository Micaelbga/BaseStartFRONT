import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
  })

  api.interceptors.request.use((req) => {
    const token = useCookie('token').value
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  })

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      push.error(err.message);
      console.error('[Axios Error]', err.code, err.message)
      return Promise.reject(err)
    }
  )

  nuxtApp.provide('axios', api)
})
