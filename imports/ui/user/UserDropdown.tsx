import React from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {UserCollection} from "/imports/api/user";
import {SlOption, SlSelect} from "@shoelace-style/shoelace/dist/react";

type userDropdownProps = {
    setActiveUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserDropdown = (props: userDropdownProps) => {
    const users = useTracker(() => UserCollection.find({}).fetch())

    const setActiveUserInComponent = (e: any) => {
        props.setActiveUser(e.target.value)
    }

    return (
        <SlSelect placeholder="User auswählen" style={{color: "black"}}
                  onSlChange={setActiveUserInComponent}>
            {users.map(user => <SlOption key={user._id} value={user._id}>{user.name}</SlOption>)}
        </SlSelect>
    );
};
