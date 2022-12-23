import React, {useRef} from "react";
import {useColors} from "../ColorContext";

export default function AddColorForm() {

    const {addColor} = useColors();

    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        e.preventDefault();
        addColor(
            txtTitle.current.value,
            hexColor.current.value
        );
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };

    return <section>
        <form method="post" onSubmit={submit}>
            <h1>
                <input
                    ref={txtTitle}
                    type="text"
                    placeholder="color title..."
                    required
                />
            </h1>
            <p>
                <input
                    ref={hexColor}
                    type="color"
                    required
                    style={{
                        width: '100vw',
                        padding: 0,
                        border: "none",
                        height: "3em"
                    }}
                />
            </p>
            <p>
                <button>
                    ADD
                </button>
            </p>
        </form>
    </section>
}
