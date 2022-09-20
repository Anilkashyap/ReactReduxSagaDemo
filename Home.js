import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { appReducer } from "./reducer";
import { getUserFecth } from "./action";

export default function Home() {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {/* <Text>User List:{users.map(user => <Text style={styles.name}>{user.name}</Text>)} </Text> */}
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button title="Get User" onPress={() => dispatch(getUserFecth())} />

        </View >
    );

}

const renderItem = ({ item }) => (
    <Text style={styles.name}>{item.name}</Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:20,
        paddingTop:10
    },
    name: {
        margin:10

    },
});
