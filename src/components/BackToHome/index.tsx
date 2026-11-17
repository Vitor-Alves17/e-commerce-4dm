import {Button, ButtonText} from "./style";

interface Props {
    onPress: () => void;
}

export const BackToHome = ({onPress}: Props) => {
    return (
        <Button onPress={onPress} accessibilityRole="button" accessibilityLabel="Voltar ao início">
            <ButtonText>← Voltar ao início</ButtonText>
        </Button>
    );
};
