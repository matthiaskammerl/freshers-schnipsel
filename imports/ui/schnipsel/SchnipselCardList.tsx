import React from 'react';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {useTracker} from "meteor/react-meteor-data";
import {SchnipselCard} from "/imports/ui/schnipsel/SchipselCard";

export const SchnipselCardList = () => {
    const schnipselList = useTracker(() => SchnipselCollection.find({}, { sort: { createdAt: -1 } }).fetch())


    return (
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem"}}>
                { schnipselList.map(schnipsel => <SchnipselCard key={schnipsel._id} schnipsel={schnipsel}/>) }
            </div>
    );
};
