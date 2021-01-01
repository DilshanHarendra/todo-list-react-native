import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AddToDo from './AddToDo';
import ShowTodo from './ShowTodo';
function Home() {
  return (
    <View>
      <Text style={style.title}>Todo List</Text>
      <AddToDo />
      <ShowTodo />
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default Home;
