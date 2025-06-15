
import DateItem from 'components/content/DateItem'
import { FlatList, ScrollView, Text, View } from 'react-native'
const data = [
  {id:1,day:"Monday"},
  {id:2,day:"Tuesday"},
  {id:3,day:"Widnesday"},
  {id:4,day:"Thursday"},
  {id:5,day:"Friday"},
  {id:6,day:"Saturday"},
  {id:7,day:"Sunday"},
]

const Index = () => {
  return (
    <View
    className='pt-10 bg-paper'
    >
      <FlatList
      contentContainerClassName='flex justify-between h-[100%]'
      
        data={data}
        renderItem={({item}) => <DateItem
        
        title={item.day} 
        />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Index