import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import ComponentScreen from "./src/screen/ComponentScreen";
import ListScreen from "./src/screen/ListScreen";
import ModalScreen from "./src/screen/ModalScreen";
import { SwipeListView } from "react-native-swipe-list-view";
import SwipeScreen from "./src/screen/SwipeScreen";
import NewListScreen from "./src/screen/NewListScreen";
import CardScreen from "./src/screen/CardScreen";
import EffectScreen from "./src/screen/EffectScreen";
import MsgScreen from "./src/screen/MsgScreen";
import StateScreen from "./src/screen/StateScreen";
import RegisForm from "./src/screen/RegisForm";

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*Home Screen*/}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          option={{title : "Home"}}
        />
        {/*ComponentScreen*/}
        <Stack.Screen
          name ="Component"
          component={ComponentScreen}
          options={{title : "Home ComponentScreen "}}
        />
        {/*ListScreen*/}
        <Stack.Screen
          name ="List"
          component={ListScreen}
          options={{title : "List"}}
        />
        <Stack.Screen
          name ="Modal"
          component={ModalScreen}
          options={{title : "Modal"}}
        />
        <Stack.Screen
          name = "Swipe"
          component={SwipeScreen}
          options={{title : "Swipe"}}        
          />
        <Stack.Screen
          name = "Newlist"
          component={NewListScreen}
          options={{title : "Newlist"}}
        />
        <Stack.Screen
          name = "CardScreen"
          component={CardScreen}
          options={{title : "CardScreen"}}
        />
        <Stack.Screen
          name="Effect"
          component={EffectScreen}
          options={{title :'Effect'}}
        />
        <Stack.Screen
          name="Msg"
          component={MsgScreen}
          options={{title : 'MsgScreen'}}
        />
        <Stack.Screen
          name="State"
          component={StateScreen}
          options={{title : 'StateScreen'}}
        />
        <Stack.Screen
          name="Regis"
          component={RegisForm}
          options={{title : 'Regiscreen'}}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
