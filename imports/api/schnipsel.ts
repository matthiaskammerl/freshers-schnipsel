import { Mongo } from 'meteor/mongo';

export interface Schnipsel {
  _id?: string;
  title: string;
  text: string;
  createdBy: string | null;
  createdAt?: Date;

}

export const SchnipselCollection = new Mongo.Collection<Schnipsel>('schnipsel');