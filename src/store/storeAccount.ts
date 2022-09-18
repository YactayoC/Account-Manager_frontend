import { atom } from 'jotai';
import { IAccount } from '../interfaces';

export const dataAccounts = atom<IAccount[] | null>(null);
export const dataAccountSelected = atom<IAccount | null>(null);
