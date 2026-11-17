import {useState} from "react";
import axios from "axios";
import {Pressable, Text, View} from "react-native";

interface Product {
    id: number;
    title: string;
    price: number;
}

export const Apitest = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const showProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
            setProducts(response.data);
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
                    {product.title} - R$ {product.price.toFixed(2)}
                </Text>
            ))}
        </View>
    );
};
