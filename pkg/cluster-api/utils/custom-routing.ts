import { CAPI_PRODUCT_NAME } from "../config/capi-types";

const BLANK_CLUSTER = '_';

export const rootCAPIRoute = () => ({
  name:    `${ CAPI_PRODUCT_NAME }-c-cluster`,
  params: { product: CAPI_PRODUCT_NAME, cluster: BLANK_CLUSTER },
  meta:   {
    product: CAPI_PRODUCT_NAME,
    cluster: BLANK_CLUSTER,
    pkg:     CAPI_PRODUCT_NAME
  },
});

export const createCAPIRoute = (name: string, params: Object, meta: Object) => ({
  name:   `${ rootCAPIRoute().name }-${ name }`,
  params: {
    ...rootCAPIRoute().params,
    ...params
  },
  meta: {
    ...rootCAPIRoute().meta,
    ...meta
  }
});