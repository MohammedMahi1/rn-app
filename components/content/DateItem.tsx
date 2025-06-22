import { Checkbox } from '@futurejj/react-native-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from 'components/ui/Input';
import { Span } from 'components/ui/Typographie';
import { useAppDispatch, useAppSelector } from 'hooks/store';

import { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { insertInThunk } from 'store/async/thunkTasks';
import { twMerge } from 'tailwind-merge';

type DateItemProps = {
  title: string;
  data?: Array<object>;
}
type TaskProps = {
  title: string;
  isChecked: boolean
}


const Task = ({ isChecked, title }: TaskProps) => {

  const [isClick, setIsChecked] = useState(isChecked)
  return (
    <View className='w-fit flex flex-row justify-start items-center'>
      <Checkbox
        size={36}
        color='#FF6600'
        status={isClick ? 'checked' : 'unchecked'}
        onPress={() => setIsChecked(!isClick)}
      />
      <Span className='text-white'>React native</Span>
    </View>
  )
}





const DateItem = ({  title }: DateItemProps) => {
  // const db = useDb()
  // const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
  const [tasks,setTasks] = useState()
  const dispatch = useAppDispatch()
  const insertHandler = () => {
    dispatch(insertInThunk(`
      {
       monday:[
       tasks:"React native with expo router",
       isChecked : false
       ] 
      }
      `))
  }
  const getHandler = async() => {
    console.log("dfvd");
  }
  return (
    <SafeAreaView className={twMerge('border-line border-b-2 items-start justify-between px-12 h-fit overflow-hidden')}>
      <Pressable className='py-4' onPress={() => setIsOpen(!isOpen)} >
        <Span className='text-6xl font-bold text-gray-800 text-white'>{title}</Span>
      </Pressable>
      {
        isOpen &&
        <View className={twMerge("flex justify-between gap-10")}>

          {/* <FlatList
          renderItem={item => <Task 
            title={inputValue}
            isChecked={false}
          />}
          data={data}
          /> */}
          <Input
            returnKeyType="done"
            onSubmitEditing={
              // getHandler
              insertHandler
            }
            value={inputValue}
            onChangeText={setInputValue}
            placeholder='Add a new task...'
          />
        </View>
      }
    </SafeAreaView>
  )
}

export default DateItem