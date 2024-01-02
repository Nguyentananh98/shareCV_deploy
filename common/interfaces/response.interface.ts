import { ICart, ICartItems } from "./cart.interface";

export interface IMetadata {
  prev_page: number | null;
  current_page: number | null;
  next_page: number | null;
  total_page: number | null;
  total_products: number | null;
  limit: number | null;
  next?: number;
}

export interface IResponse<TEntity> {
  status: number;
  detail?: string | null;
  data?: TEntity | null;
  metadata?: IMetadata | null;
  status_code?: number;
}

export interface IPaginationResponse<TEntity>
  extends Omit<IResponse<TEntity>, "data"> {
  data: TEntity[] | null;
}

export interface IAuthResponse {
  status: number;

  access_token: string;

  token_type: "bearer" | "grant";

  detail?: string;
}

export interface IRegisterResponse {
  detail: string;
  data?: { id: string; email: string };
  status: number;
}

export interface ICartResponse {
  Cart: ICart;

  CartItem: ICartItems;
}

export interface IProductsResponse<TEntity> {
  products: TEntity[];

  metadata: {
    prev_page: number | null;

    current_page: number;

    next_page: number | null;

    total_page: number;

    limit: number;

    total_products: number;
  };
}
