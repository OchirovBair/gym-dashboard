import React from 'react';
import iconsSprite from '../../assets/images/iconsSprite.svg'

type IconPropsType = {
    width: string
    height: string
    viewBox: string
    iconId: string
}

export const Icon = ({iconId, viewBox, height, width}:IconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};