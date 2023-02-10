import React, {useState} from 'react';
import {SlButton, SlDialog, SlInput} from '@shoelace-style/shoelace/dist/react';
import {SchnipselCollection} from "/imports/api/schnipsel";
import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';

const css = `
  .schnipsel-dialog-input::part(form-control-label) {
    color: black;
  }
`;

export const SchnipselDialog = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    return (
        <>
            <SlDialog open={open} onSlAfterHide={() => setOpen(false)}>
                <SlInput className="schnipsel-dialog-input" label="Titel" onSlInput={e => setTitle((e.target as SlInputElement).value)} ></SlInput>
                <SlInput className="schnipsel-dialog-input" label="Text" onSlInput={(e) => setText((e.target as SlInputElement).value)} ></SlInput>
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
