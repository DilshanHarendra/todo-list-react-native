import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import {vw} from 'react-native-css-vh-vw';
import {connect} from 'react-redux';

function AddToDo(props) {
  const [todo, setTodo] = useState('');
  console.log(props.todos);
  const addTodo = () => {
    if (todo) {
      const data = {
        type: 'add',
        todo: {
          id: props.todos.length++,
          todo: todo,
        },
      };
      setTodo('');
      props.addTodo(data);
    } else {
      Alert.alert('Please Enter Action', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <TextInput
          value={todo}
          onChangeText={(e) => setTodo(e)}
          style={style.input}
        />
      </View>
      <View>
        <TouchableOpacity
          style={style.button}
          onPress={() => addTodo()}
          underlayColor="#fff">
          <Text style={style.loginText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (data) => {
      dispatch(data);
    },
  };
};
const style = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cacaca',
    width: vw(75),
  },
  button: {
    width: vw(20),
    backgroundColor: '#f4f5f7',
    height: 40,
    color: 'black',
    borderWidth: 1,
    borderColor: '#cacaca',
    paddingTop: 5,
  },
  loginText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
