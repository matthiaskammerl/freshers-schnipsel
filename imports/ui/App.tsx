import React from 'react';
import AppNavBar from "/imports/ui/navBar/AppNavBar";
import '@shoelace-style/shoelace/dist/themes/light.css';
import {setBasePath} from '@shoelace-style/shoelace/dist/utilities/base-path';
import TabGroup from "/imports/ui/navBar/TabGroup";
import {SchnipselDialog} from "/imports/ui/SchipselDialog";
import {SchnipselCard} from "/imports/ui/SchipselCard";

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

export const App = () => (
    <div>
        <AppNavBar/>
        <TabGroup/>
        <SchnipselDialog />
        <div>
            <SchnipselCard />
        </div>
    </div>
);
