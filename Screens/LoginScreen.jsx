import { useFonts } from "expo-font";
import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Roboto/robot.ttf"),
  });
  const styles = StyleSheet.create({
    mainReg: {
      width: "100%",
      height: 549,
      flex: 1,
      flexDirection: "column",
      padding: 20,
      alignItems: "center",
      borderRadius: 25,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderWidth: 1,
      position: "absolute",
      bottom: 0,
      left: 35,
      backgroundColor: "#FFFFFF",
      gap: 25,
    },
    title: {
      fontSize: 30,
      letterSpacing: 1,
      fontWeight: 489,
      fontFamily: "Roboto",
      textAlign: "center",
    },
    input: {
      width: 343,
      height: 50,
      backgroundColor: "#F6F6F6",
      borderWidth: 2,
      borderColor: "#E8E8E8",
      borderRadius: 15,
      padding: 10,
      fontSize: 20,
    },
    regBtn: {
      width: 354,
      height: 51,
      justifyContent: "center",
      alignItems: "center",

      borderRadius: 20,
      backgroundColor: "#FF6C00",
    },
    singIn: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "#1B4371",
    },
  });
  return (
    <View>
      <ImageBackground
        style={{ width: 500, height: "100%" }}
        source={require("../img/back.png")}
      ></ImageBackground>
      <View style={styles.mainReg}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Пароль"
          // keyboardType="password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.regBtn}>
          <Text style={{ color: "white", fontSize: 20 }}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Text style={styles.singIn}>Немає акаунту? Зареєструватися</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
