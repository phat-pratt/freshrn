import { Text, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Feed = () => (
    <View style={styles.container}>
        <Text>Feed</Text>
        <StatusBar />
    </View>
);

export default Feed;
