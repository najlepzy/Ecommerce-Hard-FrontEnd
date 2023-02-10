import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ItemLoader = ({ children, loading, amount, innerClass }) => {
  return (
    <div className={innerClass}>
        {
            loading ? [...Array(amount)].map((i) => 
              <div style={{ padding: '10px', margin: '10px' }} key={i}>
                <Skeleton style={{ height: '450px', width: '290px' }} count={1} key={i} />
                </div>
            )
            :
            children
        }
    </div>
  );
};

export default ItemLoader
