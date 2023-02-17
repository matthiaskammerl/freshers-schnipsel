import * as React from 'react';
import {useRef} from 'react';
import {SlButton, SlIcon, SlInput} from "@shoelace-style/shoelace/dist/react";
import {SchnipselDialog} from "/imports/ui/schnipsel/SchnipselDialog";
import {UserDropdown} from "/imports/ui/user/UserDropdown";
import {generateNewSchnipsel} from "/imports/api/schnipsel";

type navBarProps = {
    setActiveUser: React.Dispatch<React.SetStateAction<string>>
    currentUser: string
}
export default function AppNavBar(props: navBarProps) {
    const ref = useRef()
    return (
        <div style={{
            backgroundColor: "rgb(25, 118, 210)",
            color: "white",
            minHeight: "64px",
            display: "flex",
            alignItems: "center"
        }}>
            <div style={{
                maxWidth: "1200px",
                width: "100%",
                marginInline: "auto",
                paddingInline: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <h2>Schnipsel</h2>
                <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <SchnipselDialog currentUser={props.currentUser} ref={ref} schnipsel={generateNewSchnipsel}/>
                    <SlButton onClick={() => {
                        // @ts-ignore
                        ref.current.show()
                    }}>Neuer Schnipsel</SlButton>
                    <SlInput placeholder="Suche" size="medium">
                        <SlIcon name="search" slot="prefix"></SlIcon>
                    </SlInput>
                    <UserDropdown setActiveUser={props.setActiveUser}/>
                </div>
            </div>
        </div>
    );
}
