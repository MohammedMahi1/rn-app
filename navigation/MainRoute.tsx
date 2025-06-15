
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import Index from 'screens';


const Stack = createStackNavigator<RootStackParamList>();

const MainRoute = () => {
    return (
        <Stack.Navigator initialRouteName="Index" >
            <Stack.Screen name="Index" component={Index} 
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default MainRoute