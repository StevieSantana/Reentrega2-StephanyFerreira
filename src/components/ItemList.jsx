import { Item } from "./item";

const ItemList = ({ listProduct }) => {
  console.log(listProduct);

  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', alignItems:'center', paddingTop: "70px"}}>
      
     
    <>
      {listProduct &&
        Array.isArray(listProduct) &&
        listProduct.map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </>
    </div>
  );
};

export { ItemList };
