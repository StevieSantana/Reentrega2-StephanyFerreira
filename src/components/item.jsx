import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.product}</Card.Title>
          <Card.Text>
            <p>{product.autor}</p>
            <p>{product.year}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Item };
