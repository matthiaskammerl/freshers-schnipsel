import { Meteor } from 'meteor/meteor';
import {SchnipselCollection} from "/imports/api/schnipsel";

// noinspection JSUnusedLocalSymbols
const schnipselTask = () => SchnipselCollection.insert({createdBy: "someone again", text: "", title: ""});

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
});
