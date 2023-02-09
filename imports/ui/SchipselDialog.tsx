import React from 'react';
import { useState } from 'react';
import {SlButton, SlDialog, SlInput} from '@shoelace-style/shoelace/dist/react';
import {SchnipselCollection} from "/imports/api/schnipsel";

export const SchnipselDialog = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [info, setInfo] = useState<string>('');

    return (
        <>
            <SlDialog open={open} onSlAfterHide={() => setOpen(false)}>
                <SlInput label={"Title"} onBlur={(e) => setTitle(e.target.value)} ></SlInput>
                <SlInput label={"Info"} onBlur={(e) => setInfo(e.target.value)} ></SlInput>
                <SlButton slot="footer" variant="primary" disabled={!info} onClick={() => {
                    setOpen(false)
                    SchnipselCollection.insert({
                        text: info,
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
            </SlDialog>

            <SlButton onClick={() => setOpen(true)}>Open Schnipsel Dialog</SlButton>
        </>
    );
};