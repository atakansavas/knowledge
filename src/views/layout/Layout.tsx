import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

import Header from "./components/Header";
import Footer from "./components/Footer";
const { Content } = Layout;


export default () => {

    return (
        <>
            <Header WhiteHeader={false} />
            {/* <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer /> */}
        </>

    );
}
