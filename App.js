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
    };
  }

  ORM() {
    return calculateE1RM(
      this.state.weight,
      this.state.refReps,
      this.state.refRpe
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={rpeValues}
            extraData={this.state}
            keyExtractor={rpeVal => rpeVal}
            renderItem={({ item }) => (
              <RpeDisplay
                e1RM={this.ORM()}
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
            <Text style={styles.sectionTitle}>Target Numbers</Text>
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
            <Text style={styles.sectionTitle}>Target Numbers</Text>
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
    borderTopWidth: "2px",
    borderTopColor: "black",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: "4px",
  },
  referenceContainers: {
    margin: "6px",
    padding: "8px",
    alignItems: "flex-start",
  },
  sectionTitle: {
    flex: 1,
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
});
