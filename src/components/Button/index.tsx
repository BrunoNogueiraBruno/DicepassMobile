import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IButton } from './type';
import LinearGradient from 'react-native-linear-gradient';

export default function Button(props: IButton) {
  const { title = "", prefix, label, suffix, onPress, size = "m" } = props;

  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.buttonBorder}>
          <LinearGradient
            colors={["#ADD6F5", "#899CE8"]}
            end={{ x: 1, y: 1 }}
            style={styles.buttonInner}
          >
            {prefix && <View>{prefix}</View>}
            <Text style={styles.title}>{title}</Text>
            {suffix && <View>{suffix}</View>}
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: "400"
  }
});
