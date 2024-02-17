import { useCallback } from 'react';
import { Text, StatusBar, StyleSheet, Button, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ProfileContainer = ({ navigation }) => {
    const onNavigateToSettings = useCallback(() => {
        navigation.navigate('Settings');
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title={'Settings'} color={'red'} onPress={onNavigateToSettings} />
            <StatusBar />
        </View>
    );
};

export default ProfileContainer;
