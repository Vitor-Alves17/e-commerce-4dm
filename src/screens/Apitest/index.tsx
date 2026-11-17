import {useState} from "react";
import {Pressable, Text, View} from "react-native";
import {getProducts, type Product} from "../../services/products";

export const Apitest = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const showProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getProducts();
            setProducts(data);
        } catch {
            setError("Não foi possível carregar os produtos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <Pressable onPress={showProducts}>
                <Text>{loading ? "Carregando..." : "Carregar produtos"}</Text>
            </Pressable>

            {error && <Text>{error}</Text>}

            {products.map((product) => (
                <Text key={product.id}>
                    {product.title} - US$ {product.price.toFixed(2)}
                </Text>
            ))}
        </View>
    );
};
