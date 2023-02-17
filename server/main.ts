import { Meteor } from 'meteor/meteor';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {UserCollection} from "/imports/api/user";

// noinspection JSUnusedLocalSymbols
const schnipselTask = () => SchnipselCollection.insert({createdBy: "someone again", text: "", title: ""});
const insertUser = (name: string) => UserCollection.insert({ name });


Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
    if (UserCollection.find().count() === 0) {
        insertUser("Benedikt")
        insertUser("Andreas")
        insertUser("Kean")
        insertUser("Matthias")
    }
});
