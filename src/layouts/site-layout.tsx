import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import { Layout,Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Content,Footer,Sider } = Layout;

const SiteLayout = () => {
    return (
        <Layout className='layout'>
            <Header />
            <Layout className='layout'>    
                <Sider theme='light' className='sidebar'>
                    <Menu mode='vertical'>
                        <Menu.Item key={1} >
                            <Link to="/">Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item key={2} >
                            <Link to="/about">Giới thiệu</Link>
                        </Menu.Item>
                        <Menu.Item key={3} >
                            <Link to="/about">Đăng nhập</Link>
                        </Menu.Item>
                        <Menu.Item key={4} >
                            <Link to="/about">Đăng ký</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
            <Footer className='footer'>Hãy đến đây với chúng tôi ngay bây giờ !</Footer>
        </Layout>
    );
};

export default SiteLayout;