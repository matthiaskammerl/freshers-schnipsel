import React from "react";
import {SlCard, SlIconButton} from '@shoelace-style/shoelace/dist/react';
import {Schnipsel} from "/imports/api/schnipsel";

const css = `
  .schnipsel-card {
    word-break: break-word;
  }
  
  .schnipsel-card::part(base) {
    height: 100%;
  }

  .schnipsel-card [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }

  .schnipsel-card h3 {
    margin: 0;
  }

  .schnipsel-card sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }
`;

export const SchnipselCard = ({schnipsel}: { schnipsel: Schnipsel }): JSX.Element => {

    return (
        <>
            <SlCard className="schnipsel-card">
                <div slot="header">
                    {schnipsel.title}
                    <SlIconButton name="pencil-square"></SlIconButton>
                </div>
                {schnipsel.text}
            </SlCard>
            <style>{css}</style>
        </>
    );
}

