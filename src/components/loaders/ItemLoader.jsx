import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ItemLoader = ({ children, loading, amount, lines, innerClass }) => {
  return (
    <div className={innerClass}>
        {
            loading ? [...Array(amount)].map((a,i) => 
                <div style={{padding: '10px', margin: '10px'}}>
                    <Skeleton style={{height:'450px', width: '290px'}} count={1}/>
                </div>
            )
            :
            children
        }
    </div>
  );
};

export default ItemLoader
