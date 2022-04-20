
import { StatusBar } from 'expo-status-bar';
import { Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const[name, setName]= useState('Mohammed')
  const[session, setSession]= useState({number:6, title:'state'})
  const[current, setCurrent]= useState(false)
  const[time, setTime]= useState({number: 0})
  const[item, setItem] = useState([
    {key:1, item:'item 1'},
    {key:2, item:'item 2'},
    {key:3, item:'item 3'},
    {key:4, item:'item 4'},
    {key:5, item:'item 5'},
    {key:6, item:'item 6'},
    {key:7, item:'item 7'}
  ])
  const[Referesh, setReferesh]= useState(false)
  const onClickHandler=()=>{
    setName('code with mohammed Quraysh')
    setSession({number: 5, title: 'country'})
    setCurrent(true)
  }

  const onClick=()=>{
    setTime({numbe})
  }

  const onReferesh =()=>{
    setReferesh(false)
    setItem([...item, {key:1,item: 'item 67'}]);
    setReferesh(false)
  }
  return (
  
      <ScrollView style={styles.container} refreshControl={
      <RefreshControl 
      refreshing = {Referesh} 
      onRefresh={onReferesh}/> }>

       {/* <Text style={styles.text}>Code with {name}</Text>
       <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
       <Text style={styles.text}>what is your number in your family? {session.number} and where from lagos {session.title} </Text>
      <Button title='youtube channel' onPress={()=>{Linking.openURL('https:// youtube.com')}}></Button> 
      <Button title='Update State' onPress={onClickHandler}></Button> */}
      {/* <StatusBar style="auto" /> */}
      {/* <View style={styles.container}>

      //to test button click
        <Text style={styles.text}>{time.number}</Text>
        <Button title='Add' onPress={onClick}></Button>
       <Text style={styles.text}> you clicked times</Text>
      </View> */}
      {
        /**displaying more items in array using map */
        item.map((i)=>{
          return(
            <View style={styles.item}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
          )
        })
      }
  
  </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000fff', 
    flexDirection: 'column'
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }, 
  button: {
    margin: 10,
    marginTop: 20

  },
  item:{
    backgroundColor: '#fff000',
    margin: 50,
    justifyContent:'center',
    alignItems: 'center'
    
  }
});
