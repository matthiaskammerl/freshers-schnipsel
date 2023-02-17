import React from 'react';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {useTracker} from "meteor/react-meteor-data";
import {SchnipselCard} from "/imports/ui/schnipsel/SchnipselCard";

type SchnipselCardListProps = {
    currentUser: string
}

export const SchnipselCardList = (props: SchnipselCardListProps) => {
    const schnipselList = useTracker(() => SchnipselCollection.find({createdBy: props.currentUser}, {sort: {lastModifiedAt: -1}}).fetch())

    const gridStyling = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: "1rem"
    };

    return (
        <div style={gridStyling}>
            {schnipselList.map(schnipsel =>
                <SchnipselCard key={schnipsel._id} schnipsel={schnipsel} currentUser={props.currentUser}/>
            )}
        </div>
    );
};
