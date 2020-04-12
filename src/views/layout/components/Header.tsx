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
                        <span>Ant Design</span>
                    </a>
                </Col>
                <Col lg={20} md={19} sm={0} xs={0}>
                    <Button className="header-lang-button" ghost size="small" key="lang">
                        English
        </Button>
                    <Menu mode="horizontal" defaultSelectedKeys={['home']} id="nav" key="nav">
                        <Menu.Item key="home">
                            首页
          </Menu.Item>
                        <Menu.Item key="docs/spec">
                            指引
          </Menu.Item>
                        <Menu.Item key="docs/react">
                            组件
          </Menu.Item>
                        <Menu.Item key="docs/pattern">
                            模式
          </Menu.Item>
                        <Menu.Item key="docs/resource">
                            资源
          </Menu.Item>
                        <Menu.Item key="pro">
                            <a
                                href="http://pro.ant.design"
                                className="header-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PRO
              <span style={{
                                    display: 'inline-block', position: 'relative', top: -2, width: 18,
                                }}
                                >
                                    <Badge dot />
                                </span>
                            </a>
                        </Menu.Item>
                    </Menu>                </Col>
            </Row>
        </header>
    )
}