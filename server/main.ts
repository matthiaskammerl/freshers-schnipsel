import {Meteor} from 'meteor/meteor';
import {SchnipselCollection} from "/imports/api/schnipsel";
import {UserCollection} from "/imports/api/user";

export const schnipselTask = () => SchnipselCollection.insert({createdBy: "", text: "", title: ""});
const insertUser = (name: string) => UserCollection.insert({name});


Meteor.startup(async () => {
    // If the User collection is empty, add some data.
    if (UserCollection.find().count() === 0) {
        insertUser("Benedikt")
        insertUser("Andreas")
        insertUser("Kean")
        insertUser("Matthias")
    }
});
