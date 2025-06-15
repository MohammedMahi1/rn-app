import { Checkbox } from '@futurejj/react-native-checkbox';
import Container from 'components/ui/Container';
import Input from 'components/ui/Input';
import { Span } from 'components/ui/Typographie';
import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

type DateItemProps = {
  title: string;
  data?: Array<object>;
}


const Task = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <View className='w-fit flex flex-row justify-start items-center'>
      <Checkbox
        size={36}
        color='#FF6600'
        status={isChecked ? 'checked' : 'unchecked'}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Span className='text-white'>React native</Span>
    </View>
  )
}

const DateItem = ({ data, title }: DateItemProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isOpen);

  return (
    <SafeAreaView className={twMerge('border-line border-b border-t items-start justify-between px-12 h-fit overflow-hidden')}>
      <Pressable className='py-10' onPress={() => setIsOpen(!isOpen)} >
        <Span className='text-7xl font-bold text-gray-800 text-white'>{title}</Span>
      </Pressable>
      {
        isOpen &&
        <View className={twMerge("flex justify-between gap-10")}>
      
        {/* <FlatList
          renderItem={item => <Task />}
          data={data}
          /> */}
        <Task  />
        <Input
          placeholder='Add a new task...'
          />
      </View>
  }
    </SafeAreaView>
  )
}

export default DateItem