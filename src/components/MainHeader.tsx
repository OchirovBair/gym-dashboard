import React from 'react';

type MainHeaderPropsType = {
    title: string
}

export const MainHeader = ({title}:MainHeaderPropsType) => {
    return (
        <h1>{title}</h1>
    );
};