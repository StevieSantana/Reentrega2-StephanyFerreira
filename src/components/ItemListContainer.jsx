import React from "react";
import { ItemList } from "./ItemList";
import { products } from "./data.js";
import { customFetch } from "./customFetch";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greeting }) => {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    customFetch(products).then((res) => {
      setIsLoading(false);
      setListProduct(res);
    });
  }, []);

  return (
    <>
      <h2 className="greet">{greeting}</h2>
      {!loading ? <ItemList listProduct={listProduct} /> : <h4>Loading...</h4>}
      {/*       {<ItemList listProduct={listProduct} />}
       */}{" "}
    </>
  );
};

export default ItemListContainer;
