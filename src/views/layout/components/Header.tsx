import React, { useState } from "react"
import { Menu, Row, Col, Button, Popover, Badge } from 'antd';
import clsx from 'clsx';
// import './static/header.less';

interface IProps {
    WhiteHeader: boolean
}

export default (props: IProps) => {

    return (
        <header id="header" className={clsx({
            clearfix: true,
            'home-nav-white': props.WhiteHeader,
        })}>

            <Row>
                <Col lg={4} md={5} sm={24} xs={24}>
                    <a id="logo">
                        <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                        <span>Knowledge</span>
                    </a>
                </Col>
                <Col lg={20} md={19} sm={0} xs={0}>
                    <Button className="header-lang-button" ghost size="small" key="lang">
                        Login
        </Button>
                    <Button className="header-lang-button" ghost size="small" key="lang">
                        Register
        </Button>
                    <Menu mode="horizontal" defaultSelectedKeys={['home']} id="nav" key="nav">
                        <Menu.Item key="home">
                            Home
          </Menu.Item>
                        <Menu.Item key="docs/spec">
                            Companies
          </Menu.Item>
                        <Menu.Item key="docs/react">
                            About Us
          </Menu.Item>
                        <Menu.Item key="docs/pattern">
                            Contact
          </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </header>
    )
}