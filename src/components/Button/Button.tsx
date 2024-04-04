import React from 'react';

type ButtonPropsType = {
    title: string
    icon?: string
}

export const Button = ({title, icon}: ButtonPropsType) => {
    return (
        <button>{title}</button>
    );
};