import React, { useState } from "react";
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

export default function App() {
  const [refRpe, setRefRpe] = useState(6);
  const [refReps, setRefReps] = useState(1);
  const [targetReps, setTargetReps] = useState(1);
  const [weight, setWeight] = useState("0");
  const [hasSmallWeights, toggleSmallWeights] = useState(false);
  const rpeValues = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"];

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={rpeValues}
          keyExtractor={rpeVal => rpeVal}
          renderItem={({ item }) => (
            <RpeDisplay
              e1RM={calculateE1RM(weight, refReps, refRpe)}
              repCount={targetReps}
              rpe={item}
              hasSmallWeights={hasSmallWeights}
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
            onChangeText={text => setWeight(text)}
            value={weight}
            keyboardType={"numeric"}
            clearTextOnFocus={true}
          />
          <RpePicker RPE={refRpe} onChangeRpe={newRpe => setRefRpe(newRpe)} />
          <RepsPicker reps={refReps} onChangeReps={reps => setRefReps(reps)} />
        </View>

        <View style={styles.referenceContainers}>
          <Text style={styles.sectionTitle}>Target Numbers</Text>
          <RepsPicker
            reps={targetReps}
            onChangeReps={reps => setTargetReps(reps)}
          />
          <Switch
            onValueChange={value => toggleSmallWeights(value)}
            value={hasSmallWeights}
          />
        </View>
      </View>
    </View>
  );
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
