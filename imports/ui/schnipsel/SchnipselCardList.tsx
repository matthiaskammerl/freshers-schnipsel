import React from 'react';
import {Schnipsel} from "/imports/api/schnipsel";
import {SchnipselCard} from "/imports/ui/schnipsel/SchnipselCard";

type SchnipselCardListProps = {
    currentUser: string,
    schnipselList: Schnipsel[]
    editable: boolean
}

export const SchnipselCardList = (props: SchnipselCardListProps) => {

    const gridStyling = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: "1rem"
    };

    return (
        <div style={gridStyling}>
            {props.schnipselList.map(schnipsel =>
                <SchnipselCard key={schnipsel._id} schnipsel={schnipsel} currentUser={props.currentUser}
                               editable={props.editable}/>
            )}
        </div>
    );
};
