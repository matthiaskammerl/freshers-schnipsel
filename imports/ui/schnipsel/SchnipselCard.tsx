import React, {useRef} from "react";
import {SlCard, SlIconButton} from '@shoelace-style/shoelace/dist/react';
import {Schnipsel} from "/imports/api/schnipsel";
import {SchnipselDialog} from "/imports/ui/schnipsel/SchnipselDialog";
import {useTracker} from "meteor/react-meteor-data";
import {UserCollection} from "/imports/api/user";

type SchnipselCardProps = { schnipsel: Schnipsel, currentUser: string, editable: boolean }

export const SchnipselCard = ({schnipsel, currentUser, editable}: SchnipselCardProps): JSX.Element => {
    const creator = useTracker(() => UserCollection.findOne({_id: schnipsel.createdBy}))
    const ref = useRef()

    return (
        <>
            <SlCard className="schnipsel-card">
                <div slot="header">
                    {schnipsel.title}
                    {editable && <SlIconButton onClick={() => {
                        // @ts-ignore
                        ref.current.show()
                    }} name="pencil-square"></SlIconButton>
                    }
                </div>
                <div>
                    <span style={{whiteSpace: "pre-wrap"}}>{schnipsel.text}</span>
                </div>
                <div slot="footer">
                    <span>{creator?.name}</span><span>{schnipsel.lastModifiedAt?.toLocaleString('de-DE', {
                    timeZone: 'Europe/Berlin',
                    dateStyle: "short",
                    timeStyle: "short"
                })}</span>
                </div>
            </SlCard>
            <SchnipselDialog currentUser={currentUser} ref={ref} schnipsel={schnipsel}/>
            <style>{css}</style>
        </>
    );
}

const css = `
  .schnipsel-card {
    word-break: break-word;
  }
  
  .schnipsel-card::part(base) {
    height: 100%;
  }
  
  .schnipsel-card::part(header) {
    background-color: lightgrey;
  }
  
  .schnipsel-card::part(footer) {
    padding: 0.3rem;
    background-color: lightgrey;
  }

  .schnipsel-card [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    font-weight: bold;
  }

  .schnipsel-card::part(body) {
    flex-grow: 1;
  }

  .schnipsel-card [slot="footer"] {
    font-size: .7rem;
    display: flex;
    justify-content: space-between;
  }

  .schnipsel-card h3 {
    margin: 0;
  }

  .schnipsel-card sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }
`;