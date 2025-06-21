import { Checkbox } from '@futurejj/react-native-checkbox';
import Button from 'components/ui/button';
import Input from 'components/ui/Input';
import { Span } from 'components/ui/Typographie';
import { monday } from 'db/schema';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import useDb from 'hooks/useDb';
import { useEffect, useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { getThunkTasks, insertInThunk } from 'store/async/thunkTasks';
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
  const db = useDb()
  const dispatch = useAppDispatch()
  const data = useAppSelector((state)=>state.tasks)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
 const [items, setItems] = useState<typeof monday.$inferSelect[]|null >(null);
  // useEffect(() => {
  //     const users = db.select().from(monday).toSQL();
  //     setItems(users);

  // }, []);

  const getHandler = () => {
              db.insert(monday).values([
          {
            task: "Laravel 11+"
          },
      ]).then(()=>{
        console.log("gg")
        
      }).catch((err)=>{
        console.log(err)
        
      });
    console.log(items);

    
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
          {
            data.task === null || data.task === undefined ?
              <Span className='text-white'>Empty</Span>
              :
              <Span className='text-white'>{data.task}</Span>

              
          }
          <Button onPress={getHandler}>dcsdcsc</Button>
          <Input
            returnKeyType="done"
            onSubmitEditing={
              getHandler
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