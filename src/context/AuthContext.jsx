import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const mockUser = { email, role: email.includes('admin') ? 'admin' : 'customer' };
    setUser(mockUser);
  };

  const signup = (email, password) => {
    const mockUser = { email, role: 'customer' };
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}