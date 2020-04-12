import React from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import QueueAnim from 'rc-queue-anim';
import { DownOutlined } from '@ant-design/icons';

function typeFunc(a: any) {
    if (a.key === 'line') {
        return 'right';
    } else if (a.key === 'button') {
        return 'bottom';
    }
    return 'left';
}

export default () => {
    return (
        <section className="page banner-wrapper">
            <ScrollElement
                className="page"
                id="banner"
                // onChange={({ mode }) => onEnterChange(mode)}
                playScale={0.9}
            >
                <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
                    <h2 key="h2">Knowledge <p>BASE</p></h2>
                    <p key="content">Share your comments</p>
                    <span className="line" key="line" />
                    <div key="button1" className="start-button clearfix">
                        <a>
                            Search a company
            </a>
                        <a>
                            Register
            </a>
                    </div>

                </QueueAnim>
                <DownOutlined type="down" className="down" />
            </ScrollElement>
        </section>
    );
}
