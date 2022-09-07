export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    name: 'REDIRECT',
    path: '/redirect',
    component: () => import('@/views/redirect/index.vue'),
    meta: {
      hidden: true,
    },
  },

  {
    name: 'WebChat',
    path: '/',
    component: () => import('@/views/web-chat/index.vue'),
    meta: {
      title: '客服系统',
      hidden: true,
    },
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  meta: {
    hidden: true,
  },
}

const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }
