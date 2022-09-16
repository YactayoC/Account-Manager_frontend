import { atom } from 'jotai';
import { IAccount } from '../interfaces';

export const dataAccountSelected = atom<IAccount | null>(null);
