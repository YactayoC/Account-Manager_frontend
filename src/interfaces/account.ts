export interface IAccount {
  id: string;
  aid: string;
  uid: string;
  title: string;
  description?: string;
  category: string;
  email: string;
  password: string;
}

export interface IResponseAccount {
  ok: boolean;
  msg?: string;
  accounts?: IAccount[];
}

export interface IRequestAccount {
  uid?: string;
  aid?: string;
  title: string;
  description?: string;
  category: string;
  email: string;
  password: string;
}
