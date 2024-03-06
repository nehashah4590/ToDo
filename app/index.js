import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput , TouchableOpacity, KeyboardAvoidingView, Keyboard} from "react-native";
import Task from "./components/Task.js";

function index() {
    const [task, setTask]= useState();
    const [taskItems, setTaskItems] = useState([]);


    const handleAddTask =() =>{
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

  return (
    <View style={styles.container}>

        {/* Todays Tasks */}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitles}>Today's tasks</Text>
            <View style={styles.items}>
            {
                taskItems.map((items,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=> comp}>
                            <Task text={items}/>
                        </TouchableOpacity>
                    )
                })
            }
            </View>
        </View>

        {/* Write a task */}
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios"? "padding": "height"}
        style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input}value={task} placeholder={"write a task"} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
   
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitles: {
        fontSize:24,
        fontWeight: "bold",
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper:{
        position:'absolute',
        bottom:60,
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems: 'center'
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal:15,
        backgroundColor:'#C0C0C0',
        borderWidth:1,
        width: 250,
    },
    addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#FFF',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderWidth:1,
    },
    addText:{},
})