import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);


function HomeScreen({route, navigation}) {
  const [numServings, setNumServings] = React.useState('');


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image source={require('./assets/bruschetta.png')} style={styles.bruschettaImg} />
      <TextInput 
      placeholder='Enter the Number of Servings'
      keyboardType='numeric' 
      style={styles.servings}
      onChangeText={setNumServings}
      value={numServings}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Ingredients', {

            numServings: parseInt(numServings),
          
          });
        }} >
          <Text style={styles.buttonText}>View Recipe</Text>
        </TouchableOpacity>
    </View>
  );
}

function IngredientsScreen({route, navigation}) {
  const {numServings} = route.params;

  const plumTotal = numServings * 4;
  const basilTotal = numServings * 6;
  const garlicTotal = numServings * 3;
  const oliveTotal = numServings * 3;



  return(
    <View style={styles.mainContainer}>
      <Text style={styles.ingredientsTitle}>Bruschetta</Text>
      <Text style={styles.subheading}>Ingredients</Text>
      <Text style={styles.ingredients}>{plumTotal} plum tomatoes</Text>
      <Text style={styles.ingredients}>{basilTotal} basil leaves</Text>
      <Text style={styles.ingredients}>{garlicTotal} garlic cloves, chopped</Text>
      <Text style={styles.ingredients}>{oliveTotal} TB olive oil</Text>

      <Text style={styles.subheading}>Directions</Text>
      <Text style={styles.directions}>Combine the ingredients and add salt to taste.
         Top French bread slices with mixture</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Healthy Recipes',
          }}
        />
        <Stack.Screen
          name="Ingredients"
          component={IngredientsScreen}
          options={{
            title: 'Healthy Recipes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EDE2E0',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize:40,
    fontWeight: 'bold',
  },
  ingredientsTitle: {
    fontSize:35,
    fontWeight: 'bold',
    alignSelf: 'center' 
  },
  bruschettaImg: {
    width: '100%',
    height: '30%',
    marginTop: 30,
  },
  servings: {
    height: 40,
    width: '75%',
    textAlign: 'center',
    margin: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 28,
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 10,
    fontWeight: 'bold',
    
  },
  ingredients: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft:45,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#808080",
    padding: 10,
    marginTop: 10,

  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  directions: {
    alignSelf: 'flex-start',
    width: '75%',
    marginLeft: 45,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App;
