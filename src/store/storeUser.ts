import { atom } from 'jotai';
import { IUser } from '../interfaces';

export const dataUser = atom<IUser | null>(null);
