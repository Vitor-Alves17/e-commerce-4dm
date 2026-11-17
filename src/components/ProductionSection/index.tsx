import cardImage from "../../assets/card-i.png";
import {ProductionCard} from "./CardProduction";
import {BoxProduct, ContainerProducts, EmptyText, TextHighlight, TextTitle} from "./style";

const PRODUCTS = [
    {id: "1", title: "Camiseta Básica", price: "R$ 79,90"},
    {id: "2", title: "Tênis Esportivo", price: "R$ 299,90"},
    {id: "3", title: "Fone Bluetooth", price: "R$ 149,90"},
    {id: "4", title: "Controle Gamer", price: "R$ 199,90"},
];

interface Props {
    search?: string;
}

export const ProductionSection = ({search = ""}: Props) => {
    const term = search.trim().toLowerCase();
    const products = term
        ? PRODUCTS.filter((product) => product.title.toLowerCase().includes(term))
        : PRODUCTS;

    return (
        <BoxProduct>
            <TextTitle>
                Nossos <TextHighlight>Produtos</TextHighlight>
            </TextTitle>

            {products.length === 0 ? (
                <EmptyText>Nenhum produto encontrado.</EmptyText>
            ) : (
                <ContainerProducts>
                    {products.map((product) => (
                        <ProductionCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={cardImage}
                        />
                    ))}
                </ContainerProducts>
            )}
        </BoxProduct>
    );
};
