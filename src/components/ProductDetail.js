import { DetailWrapper, ThemeButton } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD </p>
      <ThemeButton onClick={() => props.setProduct(null)}>Back</ThemeButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
