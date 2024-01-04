export type HttpRequest<TBody> = {
    body?: TBody;
    headers?: {
      token: string;
    };
  };