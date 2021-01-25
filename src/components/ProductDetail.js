import { DetailWrapper, BackButton } from "../styles";
import DeleteButtonDetailed from "./buttons/DeleteButtonDetailed";

const ProductDetail = (props) => {
  const product = props.product;

  const handleDelete = (productId) => {
    props.deleteProduct(productId);
    props.setProduct(null);
  };

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD </p>
      <BackButton className="detail" onClick={() => props.setProduct(null)}>
        Back
      </BackButton>
      <DeleteButtonDetailed
        productId={product.id}
        deleteProduct={handleDelete}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
