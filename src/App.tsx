import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";



const images = {
    img01: 'https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png',
    img02: 'https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg',
    img03: 'https://popugai.info/wp-content/uploads/2015/01/korella-285x300.jpg',
}

const links = {
    link01: 'Profile',
    link02: 'Messages',
    link03: 'News',
    link04: 'Music',
    link05: 'Settings',
}

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header imgHeader={images.img01}/>

            <Navbar linkProfile={links.link01}
                    linkMessages={links.link02}
                    linkNews={links.link03}
                    linkMusic={links.link04}
                    linkSet={links.link05}/>

            <Profile imgProfile01={images.img02}
                     imgProfile02={images.img03}/>

        </div>
    );
}


export default App;
