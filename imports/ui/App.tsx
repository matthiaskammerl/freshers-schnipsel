import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import AppNavBar from "/imports/navBar/AppNavBar";

export const App = () => (
  <div>
      <AppNavBar/>
    <h1>Welcome to Meteor! test</h1>
    <Hello />
    <Info />
  </div>
);
