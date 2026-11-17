import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import {getProducts, type Product} from "../services/products";

interface ProductsContextValue {
    products: Product[];
    loading: boolean;
    error: string | null;
    reload: () => void;
}

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

export const ProductsProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getProducts();
            setProducts(data);
        } catch {
            setError("Não foi possível carregar os produtos. Verifique sua conexão.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    const value = useMemo(
        () => ({products, loading, error, reload: loadProducts}),
        [products, loading, error, loadProducts],
    );

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts deve ser usado dentro de um ProductsProvider");
    }

    return context;
};
