import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const { name, price, image, description } = props;
  return (
    <DetailWrapper>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
