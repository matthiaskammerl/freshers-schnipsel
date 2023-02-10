import React, {useState} from 'react';
import {SlButton, SlDialog, SlInput, SlTextarea} from '@shoelace-style/shoelace/dist/react';
import {SchnipselCollection} from "/imports/api/schnipsel";
import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';

const css = `
  .schnipsel-dialog-input::part(form-control-label) {
    color: black;
  }
  
  .label-on-left {
    --label-width: 60px;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--sl-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--sl-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column: span 2;
    padding-left: calc(var(--label-width) + var(--gap-width));
  }
`;

export const SchnipselDialog = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    return (
        <>
            <SlDialog label="Neuen Schnipsel hinzufügen" open={open} onSlAfterHide={() => setOpen(false)}>
                <SlInput className="schnipsel-dialog-input label-on-left" label="Titel" onSlInput={e => setTitle((e.target as SlInputElement).value)} ></SlInput>
                <SlTextarea className="schnipsel-dialog-input label-on-left" label="Text" onSlInput={(e) => setText((e.target as SlInputElement).value)} ></SlTextarea>
                <SlButton slot="footer" variant="primary" disabled={!text} onClick={() => {
                    setOpen(false)
                    SchnipselCollection.insert({
                        text: text,
                        title,
                        createdBy: "A USER",
                        createdAt: new Date()
                    })
                }}>
                    Submit
                </SlButton>
                <SlButton slot="footer" variant="default" onClick={() => setOpen(false)}>
                    Close
                </SlButton>
                <style>{css}</style>
            </SlDialog>

            <SlButton onClick={() => setOpen(true)}>Neuer Schnipsel</SlButton>
        </>
    );
};
