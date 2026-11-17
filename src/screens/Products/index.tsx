import {useState} from "react";
import {Image} from "react-native";
import filter from "../../assets/filer-icon.png";
import logo from "../../assets/logo-tipo.png";
import {BackToHome} from "../../components/BackToHome";
import {ProductionSection} from "../../components/ProductionSection";
import {Screen} from "../../components/Screen";
import type {RootStackScreenProps} from "../../navigation/types";
import {FilterButton, ScrollP, SearchContainer, SearchInput} from "./style";

export const Products = ({navigation}: RootStackScreenProps<"Products">) => {
    const [search, setSearch] = useState("");

    return (
        <Screen>
            <ScrollP>
                <BackToHome onPress={() => navigation.navigate("Home")}/>

                <Image source={logo}/>

                <SearchContainer>
                    <SearchInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Buscar produtos"
                        placeholderTextColor="#9AA0A6"
                        returnKeyType="search"
                    />

                    <FilterButton
                        accessibilityRole="button"
                        accessibilityLabel="Filtrar produtos"
                    >
                        <Image source={filter}/>
                    </FilterButton>
                </SearchContainer>

                <ProductionSection search={search}/>
            </ScrollP>
        </Screen>
    );
};
