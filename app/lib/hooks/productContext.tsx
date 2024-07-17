import { createContext, useContext, useState, ReactNode } from 'react';

// Define el tipo del contexto
interface ProductContextType {
  products: any[];
  setProducts: (products: any[]) => void;
}

// Crea el contexto con un valor predeterminado
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Crea un hook para usar el contexto
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

// Define el proveedor del contexto
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
