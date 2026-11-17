import {useProducts} from "../../contexts/ProductsContext";
import {ProductionCard} from "./CardProduction";
import {
    BoxProduct,
    ContainerProducts,
    EmptyText,
    ErrorText,
    RetryButton,
    RetryText,
    TextHighlight,
    TextTitle,
} from "./style";

interface Props {
    search?: string;
}

const formatPrice = (price: number) => `US$ ${price.toFixed(2).replace(".", ",")}`;

export const ProductionSection = ({search = ""}: Props) => {
    const {products, loading, error, reload} = useProducts();

    const term = search.trim().toLowerCase();
    const filteredProducts = term
        ? products.filter((product) => product.title.toLowerCase().includes(term))
        : products;

    return (
        <BoxProduct>
            <TextTitle>
                Nossos <TextHighlight>Produtos</TextHighlight>
            </TextTitle>

            {loading && <EmptyText>Carregando produtos...</EmptyText>}

            {!loading && error && (
                <>
                    <ErrorText>{error}</ErrorText>
                    <RetryButton onPress={reload}>
                        <RetryText>Tentar novamente</RetryText>
                    </RetryButton>
                </>
            )}

            {!loading && !error && filteredProducts.length === 0 && (
                <EmptyText>Nenhum produto encontrado.</EmptyText>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
                <ContainerProducts>
                    {filteredProducts.map((product) => (
                        <ProductionCard
                            key={product.id}
                            title={product.title}
                            price={formatPrice(product.price)}
                            image={product.image}
                        />
                    ))}
                </ContainerProducts>
            )}
        </BoxProduct>
    );
};
