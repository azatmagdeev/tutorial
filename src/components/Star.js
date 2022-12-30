import { FaStar } from 'react-icons/fa';
import React from "react";


export const Star = ({ selected = false, onSelect }) => (
    <FaStar
        color={selected ? 'red' : 'grey'}
        onClick={onSelect}
        style={{ cursor: 'pointer' }}
    />
);