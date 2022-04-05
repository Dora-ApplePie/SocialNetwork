import preloader from "../../../assets/img/loading.gif";
import React from "react";

let Preloader = () => {
    return <div style = {{backgroundColor: 'black'}}><img src={preloader} alt={"rocket"}/></div>
}

export default Preloader;