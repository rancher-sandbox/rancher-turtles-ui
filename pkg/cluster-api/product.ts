import { IPlugin } from '@shell/core/types';

export function init($plugin: IPlugin, store: any) {
  const PRODUCT_NAME = 'Cluster API';

  const { product } = $plugin.DSL(store, PRODUCT_NAME);

  product({
    icon:    'gear',
    inStore: 'management',
    weight:  100
  });
}