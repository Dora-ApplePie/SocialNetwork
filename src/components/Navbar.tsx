import React from "react";

type PropsTypeAll = {
    linkProfile: string
    linkMessages: string
    linkNews: string
    linkMusic: string
    linkSet: string
}


export const Navbar = (props: PropsTypeAll) => {
    return (<nav className={'nav'}>
        <div className={'item'}>
            <a href={'s#'}>{props.linkProfile}</a>
        </div>
        <div className={'item'}>
            <a href={'s#'}>{props.linkMessages}</a>
        </div>
        <div className={'item'}>
            <a href={'s#'}>{props.linkNews}</a>
        </div>
        <div className={'item'}>
            <a href={'s#'}>{props.linkMusic}</a>
        </div>

        <div className={'item'}>
            <a href={'s#'}>{props.linkSet}</a>
        </div>
    </nav>)
}