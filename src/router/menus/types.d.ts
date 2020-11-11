import type { RouteRecordRaw } from 'vue-router';

enum RoleEnum {
  // super admin
  SUPER = 'super',
  // tester
  TEST = 'test'
}

export interface RouteMeta {
  title: string,
  icon?: string,
  ignoreAuth: boolean, // 是否忽略权限设置，一般是超级管理员
  ignoreKeepAlive?: boolean, // 是否缓存
  roles?: RoleEnum[], // 角色信息
  affix?: boolean, // 是否固定在标签上
  frameSrc?: string,
  externalLink?: string,
  // current page transition
  transitionName?: string;

  // Whether the route has been dynamically added
  hideBreadcrumb?: boolean;

  // disabled redirect
  disabledRedirect?: boolean;

  // close loading
  afterCloseLoading?: boolean;
  // Is it in the tab
  inTab?: boolean;
  // Carrying parameters
  carryParam?: boolean;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta: RouteMeta;
  component?: any;
  components?: any;
  children?: AppRouteRecordRaw[];
  props?: any;
  fullPath?: string;
}

export interface Menu {
  name: string;
  icon?: string;
  path: string;
  disabled?: boolean;
  children?: Menu[];
  orderNo?: number;
  roles?: RoleEnum[];
  meta?: Partial<RouteMeta>;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}

export interface AppRouteModule {
  layout?: AppRouteRecordRaw;
  routes?: AppRouteRecordRaw[];
  children?: AppRouteRecordRaw[];
  component?: any;
}