import Container from 'components/ui/Container';
import { Span } from 'components/ui/Typographie';
import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { twMerge } from 'tailwind-merge';

type DateItemProps = {
  title: string;
  data?: Array<object>;
}

const DateItem = ({ data, title }: DateItemProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    console.log(isOpen);
    
  return (
    <Container className={twMerge('border-line border-b border-t items-start justify-between px-12 h')}>
      <Pressable className='py-12' onPress={()=>setIsOpen(!isOpen)} >
        <Span className='text-7xl font-bold text-gray-800 text-white'>{title}</Span>
      </Pressable>
      <View className={twMerge(isOpen ? "h-full":"h-0","bg-red-400")}>
      {/* <FlatList
      renderItem={}
      data={data}
      /> */}
      </View>
    </Container>
  )
}

export default DateItem