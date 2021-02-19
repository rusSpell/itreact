import React from 'react'
import style from './Preloader.module.scss'
function Preloader() {
    console.log(style);
    return (
        <div className={`${style.ldsRing}`}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default Preloader
