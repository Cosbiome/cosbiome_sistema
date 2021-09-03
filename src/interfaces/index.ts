import { ReactElement } from "react";

export interface IDataStrapi {
  _id?: string;
  published_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}

export interface ILoginForm {
  identifier: string;
  password: string;
}

export interface IModules {
  name: string;
  path: string;
  icon: ReactElement;
}

export interface IAuthData {
  jwt: string;
  user: User;
}

export interface User {
  confirmed: boolean;
  blocked: boolean;
  fechas: boolean;
  _id: string;
  username: string;
  email: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  role: Role;
  id: string;
}

export interface Role {
  _id: string;
  name: string;
  description: string;
  type: string;
  __v: number;
  id: string;
}

export interface IPedidoCosbiome extends IDataStrapi {
  abono: boolean;
  apartado: number;
  estatus: string;
  vendedor: string;
  total: number;
  subTotal: number;
  referencia: string;
  productosCompra: IProductosCompra[];
  numTel: string;
  nota: string;
  nombreCliente: string;
  metodoDePago: string;
  medio: string;
  iva: number;
  idPedido: string;
  idFirebase: string;
  idCliente: string;
  horaVenta: string;
  fechaVenta: string;
  fechaDeEntrega: Date;
  direccion: IDireccion;
  de: string;
  cargo: number;
  autorizado: string;
  a: string;
}

export interface IDireccion {
  domicilio: string;
  cruces: string;
  colonia: string;
  tipo: string;
  estado: string;
  codigoPostal: string;
  ciudad: string;
}

export interface IProductosCompra {
  id: string;
  producto: string;
  precio: number;
  cantidad: number;
}
