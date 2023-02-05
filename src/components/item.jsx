import { Button, Card } from "react-bootstrap";
import { Link,  } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div  >
      <Card style={{ width: "18rem", backgroundColor: "#090909", borderColor:"pink", display: "flex"}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          {/* <Card.Title>{product.product}</Card.Title> */}
          <Card.Text>
            <p>{product.autor}</p>
            {/* <p>{product.year}</p>
            <p>{product.category}</p> */}
            <p>${product.price}</p>
          </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button className="b-detail" variant="primary" style={{ color: "black", backgroundColor:"rgb(200, 63, 86)", textDecorationStyle:"none", display:"flex", justifyContent:"flex-end" }}>Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Item };
