import React from "react";
import { useState } from "react";
import '../styles/tabs.css'

const Tabs = () => {
    const [count, setCount] = useState(false);

    return (
        <div class="container">
            <div class="tabs-item">
                <div class='tabs'>
                    <button onClick={() =>
                        <p>this is tab-1 dd</p>
                    }>Tab-1</button>

                </div>

                <div class='tabs'>
                    <button onClick={() =>
                        <p>this is tab-1</p>
                    }>Tab-2</button>

                </div>

                <div class='tabs'>
                    <button onClick={() =>
                        <p>this is tab-1</p>
                    }>Tab-3</button>

                </div>

            </div>
        </div>

    );
};
export default Tabs