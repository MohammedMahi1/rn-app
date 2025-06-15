import  { ReactNode } from 'react'
import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge';

type TypographieProps = {
    children:ReactNode;
} & TextProps

const H1 = ({children,className,...rest}:TypographieProps) => {
  return (
    <Text className={twMerge("text-4xl text-black dark:text-white",className)} {...rest}>{children}</Text>
  )
}
const Span = ({children,className,...rest}:TypographieProps) => {
  return (
    <Text className={twMerge("text-xl dark:text-white text-black",className)} {...rest}>{children}</Text>
  )
}



export {H1,Span}