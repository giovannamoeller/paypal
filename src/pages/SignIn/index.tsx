import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Input,
  Button,
  Image,
  ButtonText,
  FooterText,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../assets/logo.png";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Input placeholder="Enter your name or e-mail" />
      <Input placeholder="Password" />
      <View
        style={{
          shadowColor: "#1546A0",
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 0.18,
          shadowRadius: 10,
        }}
      >
        <LinearGradient colors={["#0070BA", "#174EB5"]} style={styles.button}>
          <Button>
            <ButtonText>Log in</ButtonText>
          </Button>
        </LinearGradient>
      </View>
      <FooterText>Having trouble logging in?</FooterText>
      <View
        style={{
          width: 100,
          backgroundColor: "#F5F7FA",
          height: 2,
          marginTop: 20,
        }}
      />
      <FooterText>Sign up</FooterText>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    marginTop: 30,
  },
});

export default SignIn;
