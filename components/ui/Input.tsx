import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

type InputProps = {} & TextInputProps

const Input = ({...rest}:InputProps) => {
  return (
    <TextInput
    className="bg-transparent placeholder:text-line text-2xl text-white"
    {...rest}
    />
  )
}

export default Input