import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  menu: {
    name: '收货管理',
    path: '/purchase-parcels',
    children: [
      {
        name: '包裹预接收',
        path: 'ready-receive'
      },{
        name: '包裹接收',
        path: 'create-update-parcel'
      }
    ]
  }
}

export default menu