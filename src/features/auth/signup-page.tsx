import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
// import { useForm } from 'react-hook-form';

type props = {

}

const Signup: React.FC<props> = (): JSX.Element => {

    const onFinish = (value: any) => {
        console.log(value);

    }

    return (
        <Form 
            onFinish={onFinish} 
            labelCol={{ span : 4}}
            wrapperCol={{ span: 7 }}
            autoComplete='off' 
            spellCheck='false'
            className='form' 
            layout='horizontal'>
            <Form.Item label='Tên đăng nhập' name="username" rules={[{
                required: true,
                message: 'Không được để trống tên đăng nhập'
            },
            { whitespace: false, message: 'Không thể có khoảng trắng' }]}>
                <Input prefix={<UserOutlined />} placeholder='Tên đăng nhập' />
            </Form.Item>
            <Form.Item rules={[
                {
                    required : true,
                    message : 'Không được để trống mật khẩu.'
                }
            ]} label='Mật khẩu' name="password">
                <Input.Password prefix={<KeyOutlined />} placeholder='Mật khẩu' />
            </Form.Item>
            <Form.Item rules={[
                {
                    required : true,
                    message : 'Không được để trống mật khẩu.'
                },
                ( value ) => ({
                    
                })
            ]} 
            label='Nhập lại mật khẩu' 
            name="password">
                <Input.Password prefix={<KeyOutlined />} placeholder='Nhập lại mật khẩu' />
            </Form.Item>
            <Form.Item wrapperCol={{offset : 4}} name="password">
                <Button htmlType='submit' type='primary'>Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default Signup;