import type { AppRouteModule } from '/@/router/types';

export default {
  layout: {
    path: '/purchase-parcels',
    name: 'purchase-parcels',
    component: () => import('/@/views/home/index.vue'),
    redirect: '/purchase-parcels/ready-receive',
    meta: {
      icon: 'ant-design:area-chart-outlined',
      title: '收货管理',
    },
  },

  routes: [
    {
      path: '/purchase-parcels',
      name: 'purchase-parcels',
      meta: {
        title: '收货管理',
      },
      children: [
        {
          name: 'ready-receive',
          path: 'ready-receive',
          meta: {
            title: '包裹预接收',
          },
          component: () => import('/@/views/home/ready-receive/index.vue'),
        },{
          name: 'create-update-parcel',
          path: 'create-update-parcel',
          meta: {
            title: '包裹接收',
          },
          component: () => import('/@/views/home/create-update-parcel/index.vue'),
        }
      ]
    }
  ]
} as AppRouteModule