import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedContainer from '../components/feed';
import ProfileContainer from '../components/profile';

type RootStackParamList = {
    Home: undefined;
    Feed: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Feed" component={FeedContainer} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileContainer} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={ProfileContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
