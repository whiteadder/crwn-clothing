import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectedShopData = createSelector(
  [selectShop],
  shop => shop.collections
);

//conver object to array
export const selectCollectionForPreview = createSelector(
  [selectedShopData],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectedShopData],
    collections => collections[collectionUrlParam]
  );
