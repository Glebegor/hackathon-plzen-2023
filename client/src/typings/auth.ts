/**
 * Interface representing access information for a user.
 */
export interface AccessInfo {
  username: string;
  password: string;
}

/**
 * Interface representing authentication information.
 */
export interface AuthInfo {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}
