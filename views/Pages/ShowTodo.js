import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

function ShowTodo(props) {
  return (
    <ScrollView>
      <View>
        {props.todos.map((action) => (
          <Text style={style.text} key={action.id}>
            {action.todo}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f4f5f7',
  },
});
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
