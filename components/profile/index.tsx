import { Text, StatusBar, StyleSheet, View } from 'react-native';
import { useAppSelector } from '../../store/hooks';
import selectors from '../../store/selectors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ProfileContainer = () => {
    // The `state` arg is correctly typed as `RootState` already
    const user = useAppSelector(selectors.user.loggedInUser);

    return (
        <View style={styles.container}>
            <Text>Welcome, {user.user_name}</Text>
            <StatusBar />
        </View>
    );
};

export default ProfileContainer;
