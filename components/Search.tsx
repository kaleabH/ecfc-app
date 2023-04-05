import { View, TextInput, TouchableOpacity, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";

interface Props{
    [key: string]: any;
    handleChange: (text: string) => void | undefined;
    value: string | undefined;
}

const Search: React.FC<Props> = ({ value, handleChange }) => {
  const [showInput, setShowInput] = useState(false);
  // const [transform, setTransform] = useState(40);
  const resizeAnim = useRef(new Animated.Value(40)).current;

  const handleTransformation = () => {
    if (showInput) {
      setShowInput(false);
      // setTransform(40);
      Animated.spring(resizeAnim, {
        toValue: 40,
        // duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      setShowInput(true);
      // setTransform(300);
      Animated.spring(resizeAnim, {
        toValue: 330,
        // duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  const handlePressOut = () => {
    setShowInput(false);
    Animated.spring(resizeAnim, {
      toValue: 40,
      // duration: 1000,
      useNativeDriver: false,
    }).start();
    // setTransform(40);
  };
  return (
    <TouchableOpacity>
      <Animated.View
        style={{
          backgroundColor: showInput ? "#FFFFFF" : "#F2F2F2",
          height: 40,
          width: resizeAnim,
          borderRadius: 24,
          padding: 3,
          borderWidth: 3,
          borderColor: "#F2F2F2",
          //  paddingVertical:1,
          //  borderRadius:25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        //   position: 'absolute',
          zIndex: 0,
        }}
      >
        {showInput && (
          <TextInput
            onChangeText={handleChange}
            onEndEditing={handlePressOut}
            value={value}
            placeholder="Search contacts"
            placeholderTextColor="gainsboro"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 10,
              flex: 2,
              backgroundColor:"#FFFFFF"
            }}
          />
        )}
        <MaterialIcons
          onPress={handleTransformation}
          name={showInput ? "close" : "search"}
          style={{ zIndex: 2 }}
          size={27}
          color={showInput ? "#000000" : "#000000"}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Search;
