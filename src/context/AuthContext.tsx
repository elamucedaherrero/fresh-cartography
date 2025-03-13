
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user database - in a real app, this would be handled by a backend
const mockUsers = [
  { id: 1, name: 'Test User', email: 'test@example.com', password: 'password123' }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
      }
    }
    setIsLoading(false);
  }, []);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulating API request delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Find user in mock database
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      // Create a sanitized user object without the password
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      toast.success("Login successful");
      setIsLoading(false);
      return true;
    } else {
      toast.error("Invalid email or password");
      setIsLoading(false);
      return false;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulating API request delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      toast.error("Email already registered");
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      password
    };
    
    mockUsers.push(newUser);
    
    // Create a sanitized user object without the password
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    toast.success("Registration successful");
    setIsLoading(false);
    return true;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info("Logged out successfully");
  };
  
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user,
        login, 
        register, 
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
