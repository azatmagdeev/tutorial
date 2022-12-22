import { FaStar } from 'react-icons/fa';


export const Star = ({ selected = false, onSelect }) => (
    <FaStar
        color={selected ? 'red' : 'grey'}
        onClick={onSelect}
        style={{ cursor: 'pointer' }}
    />
);