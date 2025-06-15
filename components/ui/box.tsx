import React, { ReactNode } from 'react'
import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

type BoxProps = {
    children:ReactNode;
} & ViewProps


const Box = ({children,className,...rest}:BoxProps) => {
  return (
    <View className={twMerge("flex flex-col",className)} {...rest}>
        {children}
    </View>
  )
}

export default Box