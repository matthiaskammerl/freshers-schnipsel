import * as React from 'react';
import {SlTab, SlTabGroup, SlTabPanel} from "@shoelace-style/shoelace/dist/react";
import {SchnipselCardList} from "/imports/ui/schnipsel/SchnipselCardList";
import {useTracker} from "meteor/react-meteor-data";
import {SchnipselCollection} from "/imports/api/schnipsel";

type TapGroupProps = {
    currentUser: string
}

export default function TabGroup(props: TapGroupProps) {
    const allSchnipselList = useTracker(() => SchnipselCollection.find({
        $or: [
            {createdBy: props.currentUser},
            {sharedWith: props.currentUser}
        ]
    }, {sort: {lastModifiedAt: -1}}).fetch())
    const ownSchnipselList = useTracker(() => SchnipselCollection.find(
        {createdBy: props.currentUser}, {sort: {lastModifiedAt: -1}}).fetch())
    const sharedSchnipselList = useTracker(() => SchnipselCollection.find(
        {sharedWith: props.currentUser}, {sort: {lastModifiedAt: -1}}).fetch())

    return (
        <>
            <SlTabGroup style={{
                maxWidth: "1200px",
                width: "100%",
                marginInline: "auto"
            }}>
                <SlTab slot="nav" panel="all">
                    Alle Schnipsel
                </SlTab>
                <SlTab slot="nav" panel="own">
                    Eigene Schnipsel
                </SlTab>
                <SlTab slot="nav" panel="shared">
                    Mit mir geteilt
                </SlTab>

                <SlTabPanel name="all">
                    <SchnipselCardList currentUser={props.currentUser} schnipselList={allSchnipselList}
                                       editable={false}/>
                </SlTabPanel>
                <SlTabPanel name="own">
                    <SchnipselCardList currentUser={props.currentUser} schnipselList={ownSchnipselList}
                                       editable={true}/>
                </SlTabPanel>
                <SlTabPanel name="shared">
                    <SchnipselCardList currentUser={props.currentUser} schnipselList={sharedSchnipselList}
                                       editable={false}/>
                </SlTabPanel>
            </SlTabGroup>
            <style>{css}</style>
        </>
    );
}

const css = `
  sl-tab-panel::part(base) {
    margin-inline: 1rem;
   }
`;