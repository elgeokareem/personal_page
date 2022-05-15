export interface LoginError {
  errorData: {
    email: string;
    password: string;
    errorEmail: string | undefined;
    errorPassword: string | undefined;
  };
  statusCode: number;
}
