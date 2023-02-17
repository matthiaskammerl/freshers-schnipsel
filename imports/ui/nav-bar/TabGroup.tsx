import * as React from 'react';
import {SlTab, SlTabGroup, SlTabPanel} from "@shoelace-style/shoelace/dist/react";
import {SchnipselCardList} from "/imports/ui/schnipsel/SchnipselCardList";

const css = `
  sl-tab-panel::part(base) {
    margin-inline: 1rem;
   }
`;

type TapGroupProps = {
    currentUser: string
}

export default function TabGroup(props: TapGroupProps) {
    return (
        <>
            <SlTabGroup style={{
                maxWidth: "1200px",
                width: "100%",
                marginInline: "auto"
            }}>
                <SlTab slot="nav" panel="general">
                    Alle Schnipsel
                </SlTab>
                <SlTab slot="nav" panel="custom">
                    Placeholder 1
                </SlTab>
                <SlTab slot="nav" panel="advanced">
                    Placeholder 2
                </SlTab>

                <SlTabPanel name="general">
                    <SchnipselCardList currentUser={props.currentUser}/>
                </SlTabPanel>
                <SlTabPanel name="custom">Placeholder 1</SlTabPanel>
                <SlTabPanel name="advanced">Placeholder 2</SlTabPanel>
            </SlTabGroup>
            <style>{css}</style>
        </>
    );
}
