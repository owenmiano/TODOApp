import React from 'react'
import { Keyboard,Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function AddTask() {
    const [task,setTask]=useState('');

    const addNewTask=(e)=>{
        e.preventDefault();
        Keyboard.dismiss();

    }
  return (
    <> 
    <KeyboardAvoidingView
    behavior={Platform.OS ==="ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
     <TextInput style={styles.input} placeholder={'Write a task'}
     onChangeText={text =>setTask(text)}
     value={task}
     />
    
     <TouchableOpacity onPress={addNewTask}>
       <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
       </View>
     </TouchableOpacity>



    </KeyboardAvoidingView>
    </>
)
}
const styles=StyleSheet.create({
    writeTaskWrapper:{
        position:'absolute',
        bottom:60,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
      },
      input:{
        paddingVertical:15,
        width:250,
        paddingHorizontal:15,
        backgroundColor:"#FFF",
        borderRadius:60,
        width:250,
        borderWidth:1,
        borderColor:'#C0C0C0'
      },
      addWrapper:{
        width:60,
        height:60,
        backgroundColor:"#FFF",
        borderRadius: 60,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#C0C0C0'
      }
})
export default AddTask