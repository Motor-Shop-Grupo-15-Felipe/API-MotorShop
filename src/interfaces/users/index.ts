export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  date_of_birth: string;
  description: string;
  //tipo_de_conta//
  password: string;
  created_at: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  date_of_birth: string;
  description: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export type IUserUpdate = {
  name?: string;
  phone?: string;
  cpf?: string;
  date_of_birth?: string;
  description?: string;
  password?: string;
};
