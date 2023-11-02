"use client"
import { createContext, useContext, useState } from "react";

export type User = {
    userId: string;
    username: string;
    email: string;
    userImage: string;
    fullName: string;
    role: "STAFF" | "ADMIN" | "MANAGER";
};

type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(() => {
        const user = window.localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    });

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch(
                "https://bird-swp.azurewebsites.net/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                }
            );
            const user = await response.json();
            setUser(user);
            window.localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        window.localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};
