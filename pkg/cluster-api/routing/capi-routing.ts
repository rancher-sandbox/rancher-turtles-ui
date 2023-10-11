import { CAPI_PRODUCT_NAME } from '../config/capi-types';

import Dashboard from '../pages/index.vue';
import ConfigPage from '../pages/config.vue';

import ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';
import CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';
import ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';
import ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';

const BLANK_CLUSTER = '_';

const routes = [
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster`,
    path:      `/${ CAPI_PRODUCT_NAME }/c/:cluster/dashboard`,
    component: Dashboard,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
      pkg:     CAPI_PRODUCT_NAME
    },
  },
  // this covers the "custom page"
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster-config`,
    path:      `/${ CAPI_PRODUCT_NAME }/c/:cluster/config`,
    component: ConfigPage,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER,
      pkg:     CAPI_PRODUCT_NAME
    },
  },
  // the following routes cover the "resource page"
  // registering routes for list/edit/create views
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster-resource`,
    path:      `/${ CAPI_PRODUCT_NAME }/c/:cluster/:resource`,
    component: ListResource,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  },
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster-resource-create`,
    path:      `/${ CAPI_PRODUCT_NAME }/c/:cluster/:resource/create`,
    component: CreateResource,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  },
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster-resource-id`,
    path:      `/${ CAPI_PRODUCT_NAME }/c/:cluster/:resource/:id`,
    component: ViewResource,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  },
  {
    name:      `${ CAPI_PRODUCT_NAME }-c-cluster-resource-namespace-id`,
    path:      `/${ CAPI_PRODUCT_NAME }/:cluster/:resource/:namespace/:id`,
    component: ViewNamespacedResource,
    meta:      {
      product: CAPI_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  }
];

export default routes;
