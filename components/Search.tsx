import { View, TextInput, TouchableOpacity, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useRef, useEffect } from "react";

interface Props {
  [key: string]: any;
  handleChange: (text: string) => void | undefined;
  value: string | undefined;
}

const Search: React.FC<Props> = ({ value, handleChange }) => {
  const [showInput, setShowInput] = useState(false);
  let inputRef: TextInput | null = useRef(null).current;
  let buttonRef: any = useRef(null).current;
  // const [transform, setTransform] = useState(40);
  const resizeAnim = useRef(new Animated.Value(15)).current;
  const resizeAnimInterpolation = resizeAnim.interpolate({ inputRange: [15, 100], outputRange: ['15%', '100%'] })
  // let resizedPercent = `${resizeAnim}%` as `${number}%`

  const handleTransformation = () => {
    if (showInput) {
      setShowInput(false);
      // setTransform(40);
      Animated.spring(resizeAnim, {
        toValue: 15,
        // duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      setShowInput(true);
      // setTransform(300);
      Animated.spring(resizeAnim, {
        toValue: 100,
        // duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };
  useEffect(() => {
    showInput && inputRef?.focus();
  }, [showInput])

  const handlePressOut = () => {
    setShowInput(false);
    Animated.spring(resizeAnim, {
      toValue: 15,
      // duration: 1000,
      useNativeDriver: false,
    }).start();
    // setTransform(40);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
      }}
    >
      <Animated.View
        style={{
          backgroundColor: showInput ? "#FFFFFF" : "#F2F2F2",
          height: 50,
          width: resizeAnimInterpolation,
          borderRadius: 24,
          padding: 3,
          borderWidth: 3,
          borderColor: "#F2F2F2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        {showInput && (
          <TextInput
            ref={textInput => { inputRef = textInput; }}
            onChangeText={handleChange}
            onEndEditing={handlePressOut}
            value={value}
            placeholder="Search here ..."
            placeholderTextColor="gainsboro"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: 'center',
              marginLeft: 10,
              flex: 2,
              backgroundColor: "#FFFFFF"
            }}
          />
        )}
        <MaterialIcons
          ref={button => { buttonRef = button }}
          onPress={handleTransformation}
          name={showInput ? "close" : "search"}
          style={{ zIndex: 2 }}
          size={40}
          color={showInput ? "#000000" : "#000000"}
        />
      </Animated.View>
    </View>
  );
};

export default Search;
