import {useState} from 'react';

function Show({data}) {
    const [block, setBlock] = useState(false);
    const showBlock = () => {
        setBlock(!block);
    }
    return ( 
        <div>
            <button onClick={showBlock}>Показать или скрыть</button>
            <p style={{display: block ? 'block' : 'none'}}>{data}</p>
        </div>
     );
}

export default Show;