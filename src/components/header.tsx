import React from 'react';
import { PageHeader } from 'antd';

const Header = () => {
    return (
        <PageHeader 
            className='header'
            title='Bùi Thế Anh Shope'
            subTitle="Shop chuyên cung cấp hàng giả"
            onBack={() => console.log('ok hello world')}
        />
    );
};

export default Header;