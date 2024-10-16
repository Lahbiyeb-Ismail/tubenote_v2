import type { z } from 'zod';

import type {
  loginFormSchema,
  registerFormSchema,
  updatePasswordSchema,
  updateProfileSchema,
} from '@/lib/schemas';
import type { ReactNode } from 'react';

export type LoginFormData = z.infer<typeof loginFormSchema>;
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export type UpdateProfileData = z.infer<typeof updateProfileSchema>;
export type UpdatePasswordData = z.infer<typeof updatePasswordSchema>;

export type User = {
  username: string;
  email: string;
};

export type RegisterResponse = {
  message: string;
  username: string;
};

export type LoginResponse = {
  message: string;
  accessToken: string;
  user: User;
};

export type AuthState = {
  accessToken: string | null;
  errorMessage?: string;
  successMessage?: string;
  isAuthenticated: boolean;
  user: User | null;
};

export type AuthAction =
  | {
      type: 'LOGIN_SUCCESS';
      payload: { message: string; accessToken: string; user: User };
    }
  | { type: 'REGISTER_SUCCESS'; payload: { successMessage: string } }
  | { type: 'REQUEST_FAIL'; payload: { errorMessage: string } }
  | { type: 'LOGOUT_SUCCESS' };

export type AuthContextType = {
  state: AuthState;
  login: (loginCredentials: LoginFormData) => void;
  register: (registerCredentials: RegisterFormData) => void;
  logout: () => void;
  isLoading: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
