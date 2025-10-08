export interface AuthModel {
  api_token: string;
  refreshToken?: string;
}

export interface UserModel {
  id: number;
  name: string | number;
  email: number;
  image: string;
  role: string;
  auth?: AuthModel;
}
