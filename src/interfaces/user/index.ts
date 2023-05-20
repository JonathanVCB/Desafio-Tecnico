export interface IUserRequest {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
