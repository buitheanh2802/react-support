import React, { useEffect } from 'react';
import { useSelector,useDispatch } from '../../store';
import { gets } from './home.action';

const HomePage = () => {

    const dispatch = useDispatch();
    const { products,loading } = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(gets())
    },[]);

    if(loading) return <div>Loading....</div>
    return (
        <div>
            hello homepage
        </div>
    );
};

export default HomePage;