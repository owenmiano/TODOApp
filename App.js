import axios from "axios";
import React, { useEffect, useState } from "react";
import { Keyboard,Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Task} from './components/Task'
function App(){
    const [task,setTask]=useState();
    const[taskItems,setTaskItems]=useState([])

    const handleSubmit=(e)=>{
      e.preventDefault();
      Keyboard.dismiss();
      
      axios.post('http://192.168.100.4:2298/addNewTask', {
        TaskName:task
    }, {headers: {
            'Content-Type': 'application/json',
            Accept:'application/json'
        }}).then(()=>{
          console.log(task);
      setTaskItems([...taskItems,task]);
      setTask(null)
    }).catch(error =>{
      console.log(error)
      Alert.alert("Sorry, something went wrong",error.message,
      [
          {
              text:"Try Again",
          }
      ]
    )
      } )
    }

    //retrieve tasks
    // const retrieveTasks=()=>{
    //  axios.get(`http://192.168.100.6:2298/getAllTasks`,{
    //       method: 'GET',
    //       headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //       }
    //   })
    //   console.log(data)
    //   return response.data
     
    // } 
   useEffect(()=>{
    axios.get(`http://192.168.100.4:2298/getAllTasks`,{
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      const result=response.data
      setTaskItems(result)
      // console.log(result);
      
      
  }).catch(error =>{
    console.log(error)
  })
   },[taskItems])



  // const  completeTask=(id)=>{
  //       let itemsCopy=[...taskItems];
  //       itemsCopy.splice(id,1)
  //       setTaskItems(itemsCopy)
  // }
  return(
       <View style={styles.container}>
               {/* TODAYS tasks */}
          <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
              
                  {/* this is where all the task will go */}
                <View style={styles.items}>
                
                  
                   {
                     
                     taskItems.map((item,id)=>{
                      return (
                        <TouchableOpacity key={id}>
                            <Task text={item.TaskName}  />
                        </TouchableOpacity>
                      )
                     })
                   }
                </View>
          </View>
               <KeyboardAvoidingView
               behavior={Platform.OS ==="ios" ? "padding" : "height"}
               style={styles.writeTaskWrapper}
               >
                <TextInput style={styles.input} placeholder={'Write a task'}
                onChangeText={text =>setTask(text)}
                value={task}
                />
               
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.addWrapper}>
                     <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>



               </KeyboardAvoidingView>
               </View>
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#E8EAED"
    },
    tasksWrapper:{
       paddingTop:30,
       paddingHorizontal:20
    },
    sectionTitle:{
          fontSize:21,
          fontWeight:'bold'
    },
    items:{
      marginTop:20
    },
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
export default App