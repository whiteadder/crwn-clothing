import React, { useState } from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [shop, setShop] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {shop.map(({ id, ...otherShopProps }) => (
        <CollectionPreview key={id} {...otherShopProps} />
      ))}
    </div>
  );
};

export default ShopPage;
