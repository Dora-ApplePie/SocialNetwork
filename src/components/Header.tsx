import React from 'react';

type PropsTypeGen = {
    imgHeader: string
}

export const Header = (props: PropsTypeGen) => {
    return (
        <header className={'header'}>
            <img alt={'Logo'}
                 src={props.imgHeader}/>
        </header>
    )
}