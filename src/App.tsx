import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";


const images = {
    img01: 'https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png',
    img02: 'https://www.iphones.ru/wp-content/uploads/2019/08/kubik_rubik-000_resize.jpg',
    img03: 'https://lh3.googleusercontent.com/proxy/8nqd4mYCEgxy57Lf0C_URtLc9o3G5EKBCVRNh-ZQQiZi4XUNdPk_rJk4HrC81AZYO1cSRXUYiZPvKt5KH5E4Pg',
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
