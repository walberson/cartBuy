import { Button } from "../atoms/Button";
import { ListItem } from "../molecules/listItem";
import { FaCartShopping, FaAnchorCircleXmark } from "react-icons/fa6";
export function Cart () {
    return <div>
        <h2>
        Carrinho de compras: <span>2 itens</span>
      </h2>
      <ul className="list">
        <ListItem
          quantity={1}
          name={"Furadeira"}
          price={"R$ 250,00"}
          urlImage={"https://picsum.photos/200"}
        />
         <ListItem
          quantity={1}
          name={"Furadeira"}
          price={"R$ 250,00"}
          urlImage={"https://picsum.photos/200"}
        />
         <ListItem
          quantity={1}
          name={"Furadeira"}
          price={"R$ 250,00"}
          urlImage={"https://picsum.photos/200"}
        />
      </ul>
      <div className="total">
        <p>Total: R$ 500,00</p>
        <Button Icon={FaCartShopping} title="Finalizar compra" />

        <Button Icon={FaAnchorCircleXmark} title="Vender acho" />
      </div>
    </div>
}