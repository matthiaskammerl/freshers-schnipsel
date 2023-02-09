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

export const SchnipselCard = (): JSX.Element[] =>{
    const schnipsel = useTracker(() => SchnipselCollection.find({}, { sort: { createdAt: -1 } }).fetch())

    return schnipsel.map(schnipsel => {
            return (
                <>
                    <SlCard className="card-header">
                        <div slot="header">
                            {schnipsel.title}
                            <SlIconButton name="pencil-square"></SlIconButton>
                        </div>
                        {schnipsel.text}
                    </SlCard>
                    <style>{css}</style>
                </>
            );
        })

}