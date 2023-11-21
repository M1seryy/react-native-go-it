import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Image, Svg, SvgUri } from "react-native-svg";
import Logo from "../assets/Union.svg";

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
    fontWeight: 500,
    textAlign: "center",
    bottom: 50,
    fontFamily: "Roboto",
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
    bottom: 50,
  },
  regBtn: {
    width: 354,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    bottom: 50,
  },
  imgInput: {
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 15,
    bottom: 70,
  },
});

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Roboto/robot.ttf"),
  });

  const formData = () => {
    console.log({ login, email, password });
  };
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
            <View style={styles.imgInput}>
              <Svg width="25" height="25">
                <Image href={require("../assets/Union.svg")} />
              </Svg>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
              placeholder="Логін"
              value={login}
              style={styles.input}
              onChangeText={(e) => setLogin(e)}
            />

            <TextInput
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={(e) => setEmail(e)}
              style={styles.input}
            />

            <TextInput
              secureTextEntry={true}
              value={password}
              placeholder="Пароль"
              onChangeText={(e) => setPassword(e)}
              style={styles.input}
            />

            <TouchableOpacity style={styles.regBtn}>
              <Text style={{ color: "white", fontSize: 20 }} onPress={formData}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>
            <Text style={{ bottom: 50, color: "#1B4371" }}>
              Вже є акаунт? Увійти
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
