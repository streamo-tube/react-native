// context/auth-provider.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextProps {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    if (email === 'test@example.com' && password === 'password') {
      setUser(email);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email: string, password: string) => {
    if (email && password.length >= 6) {
      setUser(email);
    } else {
      throw new Error('Password must be at least 6 characters');
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
