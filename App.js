import React from "react";
import {
  ActivityIndicator,
  View,
  TextInput,
  FlatList,
  Text
} from "react-native";
import RpePicker from "./src/components/RpePicker";
import RepsPicker from "./src/components/repsPicker";
import RpeDisplay from "./src/components/rpeDisplay";
import SmallestWeightSwitch from "./src/components/smallestWeightSwitch";
import { calculateE1RM } from "./src/lib";
import * as Font from "expo-font";
import { app, textInput } from "./src/styles";
const rpeValues = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refRpe: 6,
      refReps: 1,
      targetReps: 1,
      weight: "0",
      hasSmallWeights: false,
      fontLoaded: false
    };

    this.setRefRpe = this.setRefRpe.bind(this);
    this.setRefReps = this.setRefReps.bind(this);
    this.setWeight = this.setWeight.bind(this);
    this.toggleSmallestWeights = this.toggleSmallestWeights.bind(this);
    this.setTargetReps = this.setTargetReps.bind(this);
  }

  setRefRpe(rpe) {
    this.setState({ refRpe: rpe });
  }

  setRefReps(reps) {
    this.setState({ refReps: reps });
  }

  setWeight(weight) {
    this.setState({ weight: weight });
  }

  toggleSmallestWeights(value) {
    this.setState({ hasSmallWeights: value });
  }

  setTargetReps(reps) {
    this.setState({ targetReps: reps });
  }

  async componentDidMount() {
    // load custom local fonts async
    await Font.loadAsync({
      "cabin-bold": require("./assets/fonts/Cabin-Bold.ttf"),
      "cabin-regular": require("./assets/fonts/Cabin-Regular.ttf"),
      "cabin-semibold": require("./assets/fonts/Cabin-SemiBold.ttf"),
      "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
    });
    // update the fontLoaded state variable so that the text can beupdated when the
    // custom fonts are loaded
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={app.container}>
          <Text style={app.appTitle}>Simple RPE Calculator</Text>
          <FlatList
            data={rpeValues}
            extraData={this.state}
            keyExtractor={rpeVal => rpeVal}
            renderItem={({ item }) => (
              <RpeDisplay
                e1RM={calculateE1RM(
                  this.state.weight,
                  this.state.refReps,
                  this.state.refRpe
                )}
                repCount={this.state.targetReps}
                rpe={parseFloat(item)}
                hasSmallWeights={this.state.hasSmallWeights}
              />
            )}
          />
          {/* bottom container */}
          <View style={app.bottomContainer}>
            <View style={app.referenceContainers}>
              <Text style={app.sectionTitle}>Basis Numbers</Text>
              <View>
                <Text style={textInput.label}>Weight</Text>
                <TextInput
                  style={textInput.input}
                  onChangeText={this.setWeight}
                  value={this.state.weight}
                  keyboardType={"numeric"}
                  clearTextOnFocus={true}
                />
              </View>
              <RpePicker RPE={this.state.refRpe} onChangeRpe={this.setRefRpe} />
              <RepsPicker
                reps={this.state.refReps}
                onChangeReps={this.setRefReps}
              />
            </View>

            <View style={app.referenceContainers}>
              <Text style={app.sectionTitle}>Target Numbers</Text>
              <SmallestWeightSwitch
                onValueChange={this.toggleSmallestWeights}
                value={this.state.hasSmallWeights}
              />
              <RepsPicker
                reps={this.state.targetReps}
                onChangeReps={this.setTargetReps}
              />
            </View>
          </View>
        </View>
      );
    } else {
      {
        /* display loading animation until all of the fonts have loaded */
      }
      return (
        <View style={app.loading}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      );
    }
  }
}
