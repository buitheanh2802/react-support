import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import { Layout,Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';

const { Content,Footer,Sider } = Layout;

const SiteLayout = () => {

    // navigate page
    const navigate = useNavigate();
    // url reference
    const location = useLocation()
    

    return (
        <Layout className='layout'>
            <Header />
            <Layout className='layout'>    
                <Sider theme='light' className='sidebar'>
                    <Menu defaultSelectedKeys={[location.pathname]} mode='inline'>
                        <Menu.Item key={"/"} >
                            <Link to="/">Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item key={"/about"} >
                            <Link to="/about">Giới thiệu</Link>
                        </Menu.Item>
                        <Menu.Item key={"/signin"} >
                            <Link to="/signin">Đăng nhập</Link>
                        </Menu.Item>
                        <Menu.Item key={"/signup"} >
                            <Link to="/signup">Đăng ký</Link>
                        </Menu.Item>
                        <Menu.SubMenu key="submenu" title="Thông tin trang">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.SubMenu>
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