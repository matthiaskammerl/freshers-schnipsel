import { Mongo } from 'meteor/mongo';

export interface User {
  _id?: string;
  name: string;

}

export const UserCollection = new Mongo.Collection<User>('user');