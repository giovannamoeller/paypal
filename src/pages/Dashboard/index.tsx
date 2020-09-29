import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Container, Image, Card } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import miniLogo from "../../assets/mini-logo.png";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Card style={styles.card}>
          <View>
            <View>
                <Image source={miniLogo} />  
                <Image source={{uri: 'https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4'}} />
            </View>
            <Text>Hello, Giovanna!</Text>
            <Text>$ 325.50</Text>
            <Text>Your balance</Text>
          </View>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomRightRadius: 41,
    shadowColor: "#1546A0",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
});

export default Dashboard;
