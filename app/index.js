import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Task from "./components/Task.js";

function index() {
  return (
    <View style={styles.container}>

        {/* Todays Tasks */}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitles}>Today's tasks</Text>
            <View style={styles.items}>
            <Task task={"task1"}/>
            <Task task={"task2"}/>
            </View>
        </View>
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
        fontWeight: "bold"
    },
    items: {
        
    },
})