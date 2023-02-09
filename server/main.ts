import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {SchnipselCard} from "/imports/ui/SchipselCard";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

export async function insertSchnipsel({ title, text, createdBy }) {
  await SchnipselCollection.insertAsync({ title, text, createdBy, createdAt: new Date() });
}
const schnipselTask = schnipsel => SchnipselCollection.insert({createdBy: "someone again", text: "", title: ""});
Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
});
