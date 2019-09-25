import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Switch,
  View,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import RpePicker from "./src/components/RpePicker";
import RepsPicker from "./src/components/repsPicker";
import RpeDisplay from "./src/components/rpeDisplay";
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
      fontLoaded: false,
    };

    this.setRefRpe = this.setRefRpe.bind(this);
  }

  setRefRpe(rpe) {
    this.setState({ refRpe: rpe });
  }

  async componentDidMount() {
    // load custom local fonts async
    await Font.loadAsync({
      "cabin-bold": require("./assets/fonts/Cabin-Bold.ttf"),
      "cabin-regular": require("./assets/fonts/Cabin-Regular.ttf"),
      "cabin-semibold": require("./assets/fonts/Cabin-SemiBold.ttf"),
      "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
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
              {/* TODO: refactor this into its own component */}
              <View style={{ padding: 4 }}>
                <Text style={textInput.label}>Weight</Text>
                <TextInput
                  style={textInput.input}
                  onChangeText={text => this.setState({ weight: text })}
                  value={this.state.weight}
                  keyboardType={"numeric"}
                  clearTextOnFocus={true}
                />
              </View>
              <RpePicker RPE={this.state.refRpe} onChangeRpe={this.setRefRpe} />
              <RepsPicker
                reps={this.state.refReps}
                onChangeReps={reps => this.setState({ refReps: reps })}
              />
            </View>

            <View style={app.referenceContainers}>
              <Text style={app.sectionTitle}>Target Numbers</Text>
              <Switch
                onValueChange={value =>
                  this.setState({ hasSmallWeights: value })
                }
                value={this.state.hasSmallWeights}
              />
              <RepsPicker
                reps={this.state.targetReps}
                onChangeReps={reps => this.setState({ targetReps: reps })}
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={app.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }
}
