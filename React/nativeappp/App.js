import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import Flexbox from './Flexbox';

export default function App() {
  // const [name, setName] = useState('danny');
  const [person, setPerson] = useState([
    { name: 'tatsu', id: '1' },
    { name: 'gang yong', id: '2' },
    { name: 'jay jo', id: '3' },
    { name: 'shin', id: '4' },
    { name: 'bam', id: '5' },
    { name: 'goku', id: '6' },
    { name: 'saitama', id: '7' },
  ]);

  const clickHandler = () => {
    setName('wu')
  }

  const pressHandler = (id) => {
    // setPerson automatically takes in the current state as a param (prevPeople)
    setPerson((prevPeople) => {
      Alert.alert('Title', 'body', [
        { text: 'button' }
      ]);
      return prevPeople.filter((person => person.id != id))
    })
  }

  return (
    <Flexbox></Flexbox>
    // <TouchableWithoutFeedback onPress={() => {
    //   console.log('dismiss keyboard');

    // }}>
    //   <View style={styles.container}>
    //     {/* <StatusBar style="auto" /> */}

    //     <Flexbox></Flexbox>

    //     {/* <FlatList
    //       numColumns={2}
    //       keyExtractor={(item) => item.id}
    //       data={person}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //           <Text style={styles.item}>{item.name}</Text>
    //         </TouchableOpacity>
    //       )}
    //     ></FlatList> */}
    //     {/* <ScrollView>
    //       {person.map((item, index) => (
    //           <View key={index}>
    //             <Text style={styles.item}>{item.name}</Text>
    //           </View>
    //         )
    //       )}
    //     </ScrollView> */}

    //     {/* <View style={styles.header}>
    //       <Text style={styles.boldText}>hey {name}</Text>
    //       <Text>it's {person.name} and his cooking skills are {person.cooking}</Text>
    //     </View>
    //     <Text>Enter Name</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder='name'
    //       onChangeText={(val) => setName(val)}
    //     ></TextInput>

    //     <View style={styles.buttonContainer}>
    //       <Button title='update state' onPress={clickHandler}></Button>
    //     </View> */}

    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
