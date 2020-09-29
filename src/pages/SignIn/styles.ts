import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    margin-bottom: 80px;
`;

export const Input = styled.TextInput`
    margin-bottom: 15px;
    width: 320px;
    border-width: 2px;
    border-color: #F5F7FA;
    border-radius: 16px;
    height: 70px;

    font-family: 'Manrope_400Regular';
    font-size: 18px;
    color: #243656;
    text-align: center;
    
`;

export const Button = styled.TouchableOpacity`
    width: 320px;
    height: 70px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-family: 'Manrope_600SemiBold';
    color: white;
    font-size: 22px;
    text-align: center;
`;

export const FooterText = styled.Text`
    font-family: 'Manrope_400Regular';
    font-size: 18px;
    color: #243656;
    opacity: 0.5;
    margin-top: 60px;
`;  