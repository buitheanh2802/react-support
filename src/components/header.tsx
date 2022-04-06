import React from "react";
import { PageHeader, Row, Col, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <Row justify="center" align="middle" >
        <Col span={20}>
          <PageHeader
            className="header"
            title="Bùi Thế Anh Shope"
            subTitle="Shop chuyên cung cấp hàng giả"
            onBack={() => console.log("ok hello world")}
          />
        </Col>
        <Col span={4}>
          <Dropdown
            arrow={true}
            placement="bottomLeft"
            trigger={['click']}
            overlay={() => {
              return (
                <Menu>
                  <Menu.Item key={0}>
                    <Button type="primary" danger={true}>Đăng xuất</Button>
                  </Menu.Item>
                </Menu>
              );
            }}
          >
            <Button icon={<DownOutlined />}>Bùi Thế Anh</Button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};

export default Header;
