import React, { useEffect } from 'react';
import { useSelector,useDispatch } from '../../store';
import { gets } from './home.action';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const HomePage = () => {

    const dispatch = useDispatch();
    const { products,loading } = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(gets())
    },[]);
    
    if(loading) return <div>Loading....</div>
    return (
        <>
           {products?.map(item => {
               return <div>
                   {item.name}
                    <Button type='primary' danger>
                        Remove
                    </Button>
               </div>
           })}
        </>
    );
};

export default HomePage;