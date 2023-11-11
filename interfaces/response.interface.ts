export interface IResponse<T> {
  statusCode: 200 | 201 | 202 | 400 | 401 | 404 | 500;
  message?: string;
  data: T;
}
