import React, {useState} from 'react';
import AppNavBar from "/imports/ui/nav-bar/AppNavBar";
import '@shoelace-style/shoelace/dist/themes/light.css';
import {setBasePath} from '@shoelace-style/shoelace/dist/utilities/base-path';
import TabGroup from "/imports/ui/nav-bar/TabGroup";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

export const App = () => {

    const [activeUser, setActiveUser] = useState<string>('')


    return (
        <div>
            <AppNavBar setActiveUser={setActiveUser} currentUser={activeUser}/>
            <TabGroup currentUser={activeUser}/>
        </div>
    );
}
