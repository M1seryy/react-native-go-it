import { useFonts } from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import {
  Alert,
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

const CreatePost = () => {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Roboto/robot.ttf"),
  });

  const styles = StyleSheet.create({
    imgInput: {
      width: 343,
      height: 267,
      backgroundColor: "#E8E8E8",
      marginTop: 150,
    },
  });

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      {/* <TouchableOpacity
        style={styles.imgInput}
        onPress={() => selectImage()}
      ></TouchableOpacity> */}
      <Button
        title="Select Image"
        onPress={() => {
          launchImageLibrary(options)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      />
    </View>
  );
};

export default CreatePost;
