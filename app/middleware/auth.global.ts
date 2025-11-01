export default defineNuxtRouteMiddleware((to) => {
  const publicRoutes = ['/auth']
  const token = useCookie('token');  
  
  if (!token.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/auth')
  }
  
  if (token.value && publicRoutes.includes(to.path)) {
    return navigateTo(to)
  }
})
