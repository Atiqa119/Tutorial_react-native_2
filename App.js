import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SectionList, TextInput, Pressable } from 'react-native';

const persons = [
  {
    id: 1,
    title: "SECTION 1",
    data: ["PHP", "Reactjs", "Angular"]
  },
  {
    id: 2,
    title: "SECTION 2",
    data: ["Java", "Reactjs", "C++"]
  },
  {
    id: 3,
    title: "SECTION 3",
    data: ["C", "Reactjs", "C++"]
  },
  {
    id: 4,
    title: "SECTION 3",
    data: ["HTML", "Reactjs", "C++"]
  },
]
//list with flat list
const users = [
  {
    id: 1,
    name: "C++",
  },
  {
    id: 2,
    name: "java",
  },
  {
    id: 3,
    name: "Angular",
  },
  {
    id: 4,
    name: "Reactjs",
  },
]
export default function App() {
  const [name, setName] = useState('ATIQA');
  const [age, setAge] = useState('19');

  return (
    <View style={{ flex: 1, backgroundColor: '#BFD7ED' }}>
    <ScrollView horizontal={false}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 100, paddingTop: 90, paddingBottom: 40 }}> pressable</Text>
      <Text style={{ fontSize: 10, paddingLeft: 107 }}>Enter name</Text>
      <TextInput style={styles.input} placeholder='e.g. John'></TextInput>
      <Text style={{ fontSize: 10, paddingLeft: 107 }}>Enter age</Text>
      <TextInput style={styles.input} placeholder='e.g. 22'></TextInput>
      <Pressable
        onPressIn={() => { console.warn("press in") }}
        onPressOut={() => { console.warn("press out") }}
      >
        <Text style={styles.PressableBtn}> Login</Text>
      </Pressable>
      <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 100, paddingTop: 600 }}>list with Sectionlist  </Text>
      <SectionList
        sections={persons}
        renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 60, paddingTop: 10 }}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (<Text style={{ fontSize: 25, color: '#000080', fontWeight: 'bold', marginLeft: 40, paddingTop: 10 }}>{title} </Text>)}
      ></SectionList>
      <FlatList data={users} renderItem={({item})=> <Text style={styles.item} >{item.name}</Text>}
        keyExtractor={item=>item.id} />
      <StatusBar style="auto" />
      </ScrollView>

     

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  item: {
    padding: 10,
    color: "white",
    backgroundColor: 'grey',
    borderWidth: 3,
    margin: 2,
    fontWeight:'bold'
  },
  input: {
    paddingLeft: 10,
    borderColor: "#777",
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 10,
    width: 200,
    alignSelf: 'center',

  },
  PressableBtn: {
    padding: 8,
    backgroundColor: '#003060',
    borderWidth: 1,
    margin: 5,
    width: 100,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
}
);



