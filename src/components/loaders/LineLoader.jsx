import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ItemLoader = ({ children, loading, amount, lines, height, width, innerClass, innerStyle }) => {
  return (
    <div className={innerClass}>
        {
            loading ? [...Array(amount)].map((a,i) => 
                <div>
                    <Skeleton style={{...innerStyle, height:height, width: width}} count={lines}/>
                </div>
            )
            :
            children
        }
    </div>
  );
};

export default ItemLoader
