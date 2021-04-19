import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView} from 'react-native';
import { Button, Card} from 'react-native-paper';
import Header from './components/Header'

class App extends React.Component{
  render()
  {
    return(
      <View style={styles.container}>
        <Header/>
        <ImageBackground source={require('./assets/mycurve.png')} resizeMode="stretch" style={{width:"100%",height:200,alignItems: "center"}}>
          <TextInput style={{borderRadius:30,marginTop:30,marginBottom:0, backgroundColor:"white", textAlign:"center",width:250}} placeholder="Last Period Date (DD-MM-YYYY)"></TextInput>
          <Text style={{fontWeight:'bold',color:'white', textAlign:'center',marginTop:10}}>Next Period Date : 12-02-2000</Text>
          <Button mode="contained" color="white" labelStyle={{color:"#F86262"}} compact={true} onPress={() => console.log('Pressed')} style={{width:50,marginTop:20}}>
            Add
          </Button>
        </ImageBackground>
        <Card style={{marginTop:20,marginLeft:20,marginRight:20}}>
          <ScrollView style={styles.scroll_view} contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
            <Text style={{textAlign:'center', color:"#F86262", margin:5}}>Your Added Peridos data will shown here</Text>
          </ScrollView>
        </Card>
        <Card style={{margin:20}}>
          <Button mode="contained" color="#F86262" dark={true} compact={true} onPress = {()=>console.log("Mood Called")} style={{margin:5}}>
            My Mood
          </Button>
        </Card>
        <Text style={{margin:10, textAlign:'center', color:"#F86262" ,fontWeight:'bold', textDecorationLine: 'underline'}}>Made By S Das</Text>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll_view : {
    height:300,
  }
});
