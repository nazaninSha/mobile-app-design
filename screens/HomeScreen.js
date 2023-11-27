import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { imageIndex } from '../constants/images';
// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {


  const [isLogoColor, setIsLogoColor] = React.useState(true);

  function toggleLego(){
    setIsLogoColor(!isLogoColor);
  }
  
  
  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  function showViewPeople() {
    props.navigation.replace('Root', {screen: 'People'});
  }
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
        <View style={Styles.homeLogoContainer}>
          <Pressable onPress={toggleLego}>
            <Image source={imageIndex[isLogoColor ? 'logo' :'mono']} style={Styles.homeLogo}/>
          </Pressable>
        </View>

        <View style={Styles.homeHeadingContainer}>
        <Text style={Styles.homeHeading}>POI HR Management System</Text>
        </View>
        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="Show pepole"
            type="major"      // default*|major|minor
            size="large"      // small|medium*|large
            ButtonStyle={Styles.homeButton}
            onPress={showViewPeople}
          />
          <MyButton
            text="Show help"
            type="default"      // default*|major|minor
            size="large"      // small|medium*|large
            ButtonStyle={Styles.homeButton}
            onPress={showHelp}
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}