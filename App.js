import React from "react";
import {
  StyleSheet,
  Switch,
  View,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import RpePicker from "./src/RpePicker";
import RepsPicker from "./src/repsPicker";
import RpeDisplay from "./src/rpeDisplay";
import { calculateE1RM } from "./src/lib";
import * as Font from "expo-font";

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
  }

  async componentDidMount() {
    await Font.loadAsync({
      "cabin-bold": require("./assets/fonts/Cabin-Bold.ttf"),
      "cabin-regular": require("./assets/fonts/Cabin-Regular.ttf"),
      "cabin-semibold": require("./assets/fonts/Cabin-SemiBold.ttf"),
      "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style={styles.appTitle}>Simple RPE Calculator</Text>
        ) : null}
        <View>
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
        </View>
        {/* bottom container */}
        <View style={styles.bottomContainer}>
          <View style={styles.referenceContainers}>
            {/* conditional so that when the app is reloaded, the fonts will re-render */}
            {this.state.fontLoaded ? (
              <Text style={styles.sectionTitle}>Target Numbers</Text>
            ) : null}
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => this.setState({ weight: text })}
              value={this.state.weight}
              keyboardType={"numeric"}
              clearTextOnFocus={true}
            />
            <RpePicker
              RPE={this.state.refRpe}
              onChangeRpe={newRpe => this.setState({ refRpe: newRpe })}
            />
            <RepsPicker
              reps={this.state.refReps}
              onChangeReps={reps => this.setState({ refReps: reps })}
            />
          </View>

          <View style={styles.referenceContainers}>
            {/* conditional so that when the app is reloaded, the fonts will re-render */}
            {this.state.fontLoaded ? (
              <Text style={styles.sectionTitle}>Target Numbers</Text>
            ) : null}
            <RepsPicker
              reps={this.state.targetReps}
              onChangeReps={reps => this.setState({ targetReps: reps })}
            />
            <Switch
              onValueChange={value => this.setState({ hasSmallWeights: value })}
              value={this.state.hasSmallWeights}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "12px",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: "4px",
  },
  referenceContainers: {
    margin: "6px",
    padding: "8px",
    alignItems: "flex-start",
  },
  appTitle: {
    fontFamily: "roboto-black",
    fontSize: "36px",
  },
  sectionTitle: {
    flex: 1,
    fontFamily: "roboto-black",
    alignItems: "center",
    fontSize: "20px",
  },
});
