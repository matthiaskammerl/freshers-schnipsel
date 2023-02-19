import {Mongo} from 'meteor/mongo';

export interface Schnipsel {
    _id?: string;
    title: string;
    text: string;
    createdBy: string;
    sharedWith?: string[];
    createdAt?: Date;
    lastModifiedAt?: Date;

}

export function newSchnipsel(): Schnipsel {
    return {
        _id: "",
        title: "",
        text: "",
        createdBy: "",
        sharedWith: [],
        createdAt: undefined,
        lastModifiedAt: undefined,
    }
}

export const SchnipselCollection = new Mongo.Collection<Schnipsel>('schnipsel');