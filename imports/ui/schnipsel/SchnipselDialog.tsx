import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {SlButton, SlDialog, SlInput, SlOption, SlSelect, SlTextarea} from '@shoelace-style/shoelace/dist/react';
import {Schnipsel, SchnipselCollection} from "/imports/api/schnipsel";
import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';
import {useTracker} from "meteor/react-meteor-data";
import {UserCollection} from "/imports/api/user";

const css = `
  
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

type SchnipselDialogProps = {
    currentUser: string,
    schnipsel: Schnipsel
}
export const SchnipselDialog = forwardRef((props: SchnipselDialogProps, ref) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>(props.schnipsel.title);
    const [text, setText] = useState<string>(props.schnipsel.text);
    const [sharedWith, setSharedWith] = useState<string[]>(props.schnipsel.sharedWith);

    const users = useTracker(() => UserCollection.find({}).fetch())

    useImperativeHandle(ref, () => ({
        show() {
            setTitle(props.schnipsel.title)
            setText(props.schnipsel.text)
            setOpen(true)
        }
    }))

    function upsertSchnipsel(): void {
        setOpen(false)
        SchnipselCollection.upsert({_id: props.schnipsel._id},
            {
                text: text,
                title,
                createdBy: props.currentUser,
                createdAt: props.schnipsel.createdAt ? props.schnipsel.createdAt : new Date(),
                lastModifiedAt: new Date(),
                sharedWith: sharedWith
            })
        clearFields()
    }

    function clearFields() {
        setText('')
        setTitle('')
    }

    function getLabel(): string {
        return props.schnipsel._id ? "Schnipsel bearbeiten" : "Neuen Schnipsel hinzufügen";
    }

    return (
        <>
            <SlDialog style={{color: "black"}} label={getLabel()} open={open}
            >
                <SlInput className="label-on-left" label="Titel"
                         onSlInput={e => setTitle((e.target as SlInputElement).value)} value={title}></SlInput>
                <SlTextarea className="label-on-left" label="Text"
                            onSlInput={(e) => setText((e.target as SlInputElement).value)} value={text}></SlTextarea>
                <SlSelect className="label-on-left" label="Teilen" placement="bottom"
                          onSlChange={(e: any) => setSharedWith(e.target.value)}
                          value={sharedWith} multiple clearable>
                    {users.filter(user => user._id != props.currentUser)
                        .map(user => <SlOption key={user._id} value={user._id}>{user.name}</SlOption>)}
                </SlSelect>
                <SlButton slot="footer" variant="primary" disabled={!text} onClick={() => upsertSchnipsel()}>
                    Submit
                </SlButton>
                <SlButton slot="footer" variant="default" onClick={() => {
                    setOpen(false)
                    clearFields()
                }}>
                    Close
                </SlButton>
                <style>{css}</style>
            </SlDialog>
        </>
    );
});
