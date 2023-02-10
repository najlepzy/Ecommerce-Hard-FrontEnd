import "../../styles/containerCardsItems.css";
import Item from "../componentsitems/Item";
import ItemLoader from "../loaders/ItemLoader"


export const ItemList = ({ datos }) => {
  return (
      <ItemLoader innerClass={'containerCardItems'} loading={datos.length == 0} amount={10} lines={3}>
          {datos.map((product) => ( 
            <Item
              key={product.id}
              productData={product}
            />
          ))}
      </ItemLoader>
  );
};
