import Color from "./Color";
import {useColors} from "../ColorContext";
import React from "react";


export default function ColorList() {

    const {colors} = useColors();

    if (!colors.length) return <div>No Colors Listed.</div>;

    return (
        <div>
            {colors.map(color =>

                <Color
                    key={color.id}
                    {...color}
                />
            )}
        </div>
    );
}