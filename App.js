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
import Constants from "expo-constants";
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
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style={styles.appTitle}>Simple RPE Calculator</Text>
        ) : null}

        <Text>
          Debug: weight: {this.state.weight} refRPE: {this.state.refRpe} reps:
          {this.state.refReps}
        </Text>
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
              <Text style={styles.sectionTitle}>Basis Numbers</Text>
            ) : null}
            {/* TODO: refactor this into its own component */}
            <View style={{ padding: 4 }}>
              {this.state.fontLoaded ? (
                <Text style={{ fontFamily: "cabin-bold" }}>Weight</Text>
              ) : null}
              <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
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

          <View style={styles.referenceContainers}>
            {/* conditional so that when the app is reloaded, the fonts will re-render */}
            {this.state.fontLoaded ? (
              <Text style={styles.sectionTitle}>Target Numbers</Text>
            ) : null}
            <Switch
              onValueChange={value => this.setState({ hasSmallWeights: value })}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  referenceContainers: {
    margin: 6,
    alignItems: "flex-start",
  },
  appTitle: {
    fontFamily: "roboto-black",
    fontSize: 36,
  },
  sectionTitle: {
    fontFamily: "roboto-black",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 12,
  },
});
