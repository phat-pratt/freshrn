import { Text, StatusBar, StyleSheet, View } from 'react-native';
import { useGetUserInfoQuery } from '../../services/api';
import selectors from '../../store/selectors';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ProfileContainer = () => {
    const user = useSelector(selectors.user.loggedInUser);
    const { data, isLoading } = useGetUserInfoQuery(1);

    return (
        <View style={styles.container}>
            <Text>{`Welcome,\n${data?.full_name}`}</Text>
            <Text>id: {data?.id}</Text>
            <Text>username: {data?.user_name}</Text>
            <StatusBar />
        </View>
    );
};

export default ProfileContainer;
