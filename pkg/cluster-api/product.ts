import { IPlugin } from '@shell/core/types';
import { CAPI_SCHEMA_IDS } from './config/capi-types';
import { rootCAPIRoute, createCAPIRoute } from './utils/custom-routing';
import { CAPI_TYPES } from './types';
import { CAPI_PRODUCT_NAME } from "./config/capi-types";

const BLANK_CLUSTER = '_';

export function init($plugin: IPlugin, store: any) {
  const { 
    product,
    virtualType,
    configureType,
    basicType 
  } = $plugin.DSL(store, CAPI_PRODUCT_NAME);

  // app in sidebar
  product({
    icon:    'gear',
    inStore: 'management',
    weight:  100,
    to: rootCAPIRoute()
  });

  //dashboard menu
  virtualType({
    label: store.getters['i18n/t']('capi.menuLabels.dashboard'),
    icon: 'folder',
    group: 'Root',
    namespaced: false,
    name: CAPI_TYPES.DASHBOARD,
    weight: 100,
    route: rootCAPIRoute()
  });

  //config menu
  virtualType({
    label: store.getters['i18n/t']('capi.menuLabels.config'),
    icon: 'folder',
    group: 'Root',
    namespaced: false,
    name: CAPI_TYPES.CONFIG,
    weight: 10,
    route: createCAPIRoute('config'),
  });

  configureType(CAPI_SCHEMA_IDS.CLUSTERS, {
    displayName: 'CAPI Cluster',
    isCreatable: false,
    isRemovable: false,
    showAge: true,
    showState: true,
    // customRoute: {
    //   name: `${ PRODUCT_NAME }-c-cluster-resource`,
    //   params: {
    //     product: PRODUCT_NAME,
    //     cluster: BLANK_CLUSTER,
    //     resource: CAPI_CLUSTER_NAME
    //   }
    // }
  });

  basicType([
    CAPI_TYPES.DASHBOARD,
    CAPI_TYPES.CONFIG,
    CAPI_SCHEMA_IDS.CLUSTERS
  ]);
}