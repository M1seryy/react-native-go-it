import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Roboto/robot.ttf"),
  });

  const formData = () => {
    console.log({ email, password });
  };
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
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Пароль"
              value={password}
              style={styles.input}
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity onPress={formData} style={styles.regBtn}>
              <Text style={{ color: "white", fontSize: 20 }}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.singIn}>Немає акаунту? Зареєструватися</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
