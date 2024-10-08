"use client";

import { createContext, useContext, useReducer } from "react";

import type { AuthContextType, AuthProviderProps } from "@/types/auth.types";

import useRegister from "@/hooks/useRegister";
import useLogin from "@/hooks/useLogin";
import authReducer, { authInitialState } from "@/reducers/auth.reducer";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
	const [state, dispatch] = useReducer(authReducer, authInitialState);

	const registerMutation = useRegister(dispatch);
	const loginMutation = useLogin(dispatch);

	const value = {
		state,
		login: loginMutation.mutate,
		register: registerMutation.mutate,
		isLoading: registerMutation.isPending || loginMutation.isPending,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
}
