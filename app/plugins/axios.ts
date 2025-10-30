import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const api = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
  })

  api.interceptors.request.use((req) => {
    console.log('[Axios Request]', req.url)
    return req
  })

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      console.error('[Axios Error]', err.message)
      return Promise.reject(err)
    }
  )

  nuxtApp.provide('axios', api)
})
