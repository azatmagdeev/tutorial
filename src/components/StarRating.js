import { useState } from 'react'
import { Star } from './Star'

export function StarRating({ totalStars = 5, selectedStars = 0, onRate }) {

    //const [selectedStars, setSelectedStars] = useState(3);

    return <>
        {[...Array(totalStars)].map((n, i) =>
            <Star
                selected={selectedStars > i}
                key={i}
                onSelect={() => onRate(i + 1)}
            />
        )}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </>
}