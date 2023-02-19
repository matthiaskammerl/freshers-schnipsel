import * as React from 'react';
import {useRef} from 'react';
import {SlButton} from "@shoelace-style/shoelace/dist/react";
import {SchnipselDialog} from "/imports/ui/schnipsel/SchnipselDialog";
import {UserDropdown} from "/imports/ui/user/UserDropdown";
import {newSchnipsel} from "/imports/api/schnipsel";

type navBarProps = {
    setActiveUser: React.Dispatch<React.SetStateAction<string>>
    currentUser: string
}

export default function AppNavBar(props: navBarProps) {
    const ref = useRef()
    return (
        <div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <h2 style={{color: "white"}}>Schnipsel</h2>
                <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <SchnipselDialog currentUser={props.currentUser} ref={ref} schnipsel={newSchnipsel()}/>
                    <SlButton onClick={() => {
                        // @ts-ignore
                        ref.current.show()
                    }}>Neuer Schnipsel</SlButton>
                    <UserDropdown setActiveUser={props.setActiveUser}/>
                </div>
            </div>
        </div>
    );
}

const outerDivStyle = {
    backgroundColor: "rgb(25, 118, 210)",
    minHeight: "64px",
    display: "flex",
    alignItems: "center"
}

const innerDivStyle = {
    maxWidth: "1200px",
    width: "100%",
    marginInline: "auto",
    paddingInline: "0.5rem",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between"
}