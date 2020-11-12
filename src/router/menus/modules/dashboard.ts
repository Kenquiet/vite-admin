import type { MenuModule } from '/@/router/types.d'

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: 'Dashboard',
    path: '/dashboard',
    children: [
      {
        path: '/welcome',
        name: '首页',
      },
      {
        path: '/workbench',
        name: '首页',
      },
    ],
  },
};
export default menu;