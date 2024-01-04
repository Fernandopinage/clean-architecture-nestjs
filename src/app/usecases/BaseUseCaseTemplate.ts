import { HttpRequest } from "../http/HttpRequest";
import { HttpResponse } from "../http/HttpResponse";

export abstract class BaseUseCaseTemplate<TBodyRequest, TResponse = void>{
  protected body: TBodyRequest;
  private response: HttpResponse<TResponse>;

  async execute(httpRequest: HttpRequest<TBodyRequest>): Promise<HttpResponse<TResponse>> {
    this.body = httpRequest.body;
    try {
       await this.process();

      if (!this.response.statusCode) {
        throw new Error('Status Code invalid');
      }
      const errors = this.response.errors;
      return {
        body: this.response.body,
        errors: errors?.length ? errors : null,
        statusCode: this.response.statusCode
      };
    } catch (error) {
      console.log('>>>>>>', error);
    }
    return;
  }

  protected abstract process(): Promise<any>;
  protected setResponseStatusCode(statusCode: number): void {
    this.response = { ...this.response, statusCode };
  }

  protected setResponseBody(body: TResponse): void {
    this.response = { ...this.response, body };
  }
}
