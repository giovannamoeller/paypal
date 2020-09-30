import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../../assets/mini-logo.png";
import miniLogo from "../../assets/logo2.png";
import upload from "../../assets/upload.png";
import upload2 from "../../assets/upload2.png";
import ellipsis from "../../assets/ellipsis.png";

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <LinearGradient colors={["#0070BA", "#174EB5"]}>
          <View style={styles.cardInside}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.headerImage}>
              <Image source={miniLogo} style={styles.miniLogo} />
              <Image
                style={styles.personalImage}
                source={{
                  uri:
                    "https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4",
                }}
              />
            </View>
            <Text style={styles.welcomeText}>Hello, Giovanna!</Text>
            <Text style={styles.balanceDollarText}>$ 220.00</Text>
            <Text style={styles.balanceText}>Your balance</Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.paymentContainer}>
        <View style={styles.sendMoneyContainer}>
          <Image source={upload} style={styles.sendMoneyIcon} />
          <Text style={styles.sendMoneyText}>Send Money</Text>
        </View>
        <View style={styles.requestPaymentContainer}>
          <Image source={upload2} style={styles.requestPaymentIcon} />
          <Text style={styles.requestPaymentText}>Request Payment</Text>
        </View>
        <View style={styles.moreThingsContainer}>
          <Image source={ellipsis} style={styles.moreThingsImage} />
        </View>
      </View>

      <View style={styles.activityContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.activityContainerText}>Activity</Text>
          <Text style={styles.activityContainerViewAllText}>View All</Text>
        </View>

        <View style={styles.singleActivityContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.singleActivityContainerName}>Mike Rine</Text>
              <Text style={styles.singleActivityContainerHour}>
                2 hours ago
              </Text>
            </View>
            <Text style={styles.singleActivityContainerValue}>+ $250</Text>
          </View>
        </View>

        <View style={styles.singleActivityContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.singleActivityContainerName}>Food</Text>
              <Text style={styles.singleActivityContainerHour}>Yesterday</Text>
            </View>
            <Text style={styles.singleActivityContainerValue2}>- $30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "100%",
    minHeight: 280,
    borderBottomRightRadius: 41,
    position: "absolute",
    top: 0,
    shadowColor: "#1546A0",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    overflow: "hidden",
  },

  logo: {
    position: "absolute",
    width: 330,
    height: 390,
  },
  personalImage: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    borderWidth: 2,
    borderColor: "#0070BA",
  },
  miniLogo: {
    height: 50,
    width: 50,
  },
  cardInside: {
    padding: 48,
  },
  headerImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  welcomeText: {
    fontFamily: "Manrope_400Regular",
    color: "white",
    opacity: 0.5,
    fontSize: 22,
    lineHeight: 22,
    marginTop: 24,
  },
  balanceDollarText: {
    fontFamily: "Manrope_600SemiBold",
    color: "white",
    fontSize: 44,
    marginTop: 16,
  },
  balanceText: {
    fontFamily: "Manrope_400Regular",
    color: "white",
    fontSize: 18,
    marginTop: 8,
  },
  paymentContainer: {
    flexDirection: "row",
    marginTop: 300,
  },
  sendMoneyContainer: {
    width: 130,
    height: 160,
    backgroundColor: "#005EA6",
    marginRight: 16,
    borderRadius: 24,
    padding: 24,
  },
  requestPaymentContainer: {
    width: 130,
    height: 160,
    backgroundColor: "#FAFAFA",
    borderRadius: 24,
    padding: 24,
    marginRight: 16,
  },
  sendMoneyIcon: {
    width: 28,
    height: 28,
  },
  requestPaymentIcon: {
    width: 28,
    height: 28,
  },
  sendMoneyText: {
    fontFamily: "Manrope_500Medium",
    color: "white",
    fontSize: 18,
    marginTop: 24,
  },
  requestPaymentText: {
    fontFamily: "Manrope_500Medium",
    color: "#005EA6",
    fontSize: 18,
    marginTop: 24,
  },
  moreThingsContainer: {
    width: 90,
    height: 160,
    backgroundColor: "#FAFAFA",
    borderRadius: 24,
    padding: 24,
  },
  moreThingsImage: {
    alignSelf: "center",
    marginTop: 40,
    height: 20,
  },
  activityContainer: {
    minWidth: "100%",
    padding: 32,
  },
  activityContainerText: {
    fontFamily: "Manrope_600SemiBold",
    color: "#243656",
    fontSize: 18,
    marginBottom: 15,
  },
  activityContainerViewAllText: {
    fontFamily: "Manrope_400Regular",
    color: "#243656",
    opacity: 0.5,
    fontSize: 16,
    marginBottom: 15,
  },
  singleActivityContainer: {
    width: 350,
    backgroundColor: "#FEFEFE",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#1546A0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    marginBottom: 15,
  },
  singleActivityContainerName: {
    fontFamily: "Manrope_400Regular",
    color: "#243656",
    fontSize: 20,
  },
  singleActivityContainerHour: {
    fontFamily: "Manrope_400Regular",
    color: "#243656",
    opacity: 0.5,
    fontSize: 16,
  },
  singleActivityContainerValue: {
    fontFamily: "Manrope_600SemiBold",
    color: "#37D39B",
    fontSize: 20,
  },
  singleActivityContainerValue2: {
    fontFamily: "Manrope_600SemiBold",
    color: "#F47090",
    fontSize: 20,
  },
});

export default Dashboard;
