import * as React from 'react';
import {SlIcon, SlIconButton, SlInput} from "@shoelace-style/shoelace/dist/react";

export default function AppNavBar() {
    return (
        <div style={{
            backgroundColor: "rgb(25, 118, 210)",
            color: "white",
            minHeight: "64px",
            display: "flex",
            alignItems: "center"
        }}>
            <div style={{
                width: "1200px",
                marginInline: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <h2>Schnipsel</h2>
                <div style={{display: "flex", alignItems: "center"}}>
                    <SlInput placeholder="Suche" size="medium">
                        <SlIcon name="search" slot="prefix"></SlIcon>
                    </SlInput>
                    <SlIconButton name="list" label="Settings" style={{color: "white", fontSize: '2rem'}}/>
                </div>
            </div>
        </div>
    );
}