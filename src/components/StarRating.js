import { Star } from './Star'
import React from "react";


export function StarRating({ totalStars = 5, selectedStars = 0, onRate }) {


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