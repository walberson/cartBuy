import { ProductInfo } from "../atoms/ProductInfo";

export function ListItem ({urlImage,name,price,quantity}) {
    return  <li className="listItem">
    <div style={{ display: "flex" }}>
      <div className="imageBox">
        <img src={urlImage} alt="Nome do produto" />
      </div>
      <ProductInfo name={name} price={price} />
    </div>
    <p>{quantity}</p>
  </li>
}