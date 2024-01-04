import { ErrorMessage } from "./ErrorMessage";

export type HttpResponse<TBody, THeaders = undefined> = {
    statusCode: number;
    errors?: ErrorMessage[];
    body?: TBody;
    headers?: THeaders;
  };
  