import {Mongo} from 'meteor/mongo';

export interface Schnipsel {
    _id?: string;
    title: string;
    text: string;
    createdBy: string | null;
    createdAt?: Date;
    lastModifiedAt?: Date;

}

export const generateNewSchnipsel: Schnipsel = {
    createdBy: null,
    text: "",
    title: ""

}

export const SchnipselCollection = new Mongo.Collection<Schnipsel>('schnipsel');