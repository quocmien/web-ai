import Vue from 'vue'
import Router from 'vue-router'
import LayoutAdmin from '@/layout/LayoutAdmin'
import i18n from '@/i18n'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: LayoutAdmin,
    redirect: '/dashboard',
    meta: {
      auth: true
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Home.vue'),
        name: 'home',
        meta: {
          title: i18n.t('dashboard.title')
        }
      },
      {
        path: 'camera-zone-manager',
        component: () => import('@/views/Camera.vue'),
        meta: {
          title: i18n.t('camera.title')
        }
      },
      {
        path: 'worker-manager',
        component: () => import('@/views/Worker.vue'),
        meta: {
          title: i18n.t('woker.title')
        }
      },
      {
        path: 'field-manager',
        component: () => import('@/views/Field.vue'),
        meta: {
          title: i18n.t('field.title')
        }
      },
      {
        path: 'risk-area-manager',
        component: () => import('@/views/Risk.vue'),
        meta: {
          title: i18n.t('risk.title')
        }
      },
      {
        path: 'tracking-logs',
        component: () => import('@/views/Tracking.vue'),
        meta: {
          title: i18n.t('tracking.title')
        }
      }
    ]
    }
]

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active --active',
  linkExactActiveClass: '--exact-active'
})

export default router
