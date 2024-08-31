export interface IAuthResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    session_state: string;
    scope: string;
    id_token :string
  }
  