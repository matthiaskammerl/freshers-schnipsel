import React from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { SlCard, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import {SchnipselCollection} from "/imports/api/schnipsel";

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }
`;

export const SchnipselCard = () =>{
    const schnipsel = useTracker(() => SchnipselCollection.find().fetch())
    // const oneTitle = allTitles[0].title

    console.log(schnipsel)

    return (
        <>
            <SlCard className="card-header">
                <div slot="header">
                    <SlIconButton name="gear"></SlIconButton>
                </div>
                This card has a header. You can put all sorts of things in it!
            </SlCard>
            <style>{css}</style>
        </>
    );
}