import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Button} from "../../components/Button/Button";
import {data} from "../../data/data";
import s from './Sidebar.module.css'
import ic from '../../assets/images/iconSprite.svg'

export const Sidebar = () => {
    return (
        <nav>
            <div className={s.logo}>
                <Logo/>
            </div>
            <div>
                {data.sidebar.buttons.map(btn => <Button title={btn}/>)}
            </div>
        </nav>
    );
};