import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ImageLoader = ({ children, loading, width, height }) => {
  return (
    <div>
        {
            loading ?
                <div style={{padding: '10px', margin: '10px'}}>
                    <Skeleton style={{height:height, width: width}} count={1}/>
                </div>
            :
            children
        }
    </div>
  );
};

export default ImageLoader
