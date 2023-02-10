import React from 'react';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {useTracker} from "meteor/react-meteor-data";
import {SchnipselCard} from "/imports/ui/schnipsel/SchnipselCard";

export const SchnipselCardList = () => {
    const schnipselList = useTracker(() => SchnipselCollection.find({}, { sort: { createdAt: -1 } }).fetch())

    const gridStyling = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: "1rem"
    };

    return (
            <div style={gridStyling}>
                { schnipselList.map(schnipsel => <SchnipselCard key={schnipsel._id} schnipsel={schnipsel}/>) }
            </div>
    );
};
