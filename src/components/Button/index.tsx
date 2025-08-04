import React from 'react';
import { View, Text, Button } from 'react-native';
import { IButton } from './type';

export default function Logo(props: IButton) {
  const {title="", prefix, label, suffix, onPress, size = "m"} = props

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {prefix && <View>{prefix}</View>}
      {label && <Text>{label}</Text>}
      <Button
        title={title}
        onPress={onPress}
      />
      {suffix && <View>{suffix}</View>}
    </View>
  )

}
