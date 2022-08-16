import axios from "axios";
import React, { useEffect, useState } from "react";
import { Keyboard,Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Task} from './components/TaskList'
function App(){
    const[taskItems,setTaskItems]=useState([])

    const handleSubmit=(e)=>{
      e.preventDefault();
      
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
  })
export default App