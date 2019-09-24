import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const picker = StyleSheet.create({
  container: {
    padding: 4,
    margin: 4,
    height: 40,
    width: "100%",
  },
  label: {
    fontFamily: "cabin-semibold",
    fontSize: 18,
  },
  inputIOS: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    color: "black",
    width: 100,
  },
});

const textInput = StyleSheet.create({
  label: {
    fontFamily: "cabin-semibold",
    fontSize: 18,
  },
});

const rpe = StyleSheet.create({
  text: {
    fontFamily: "cabin-semibold",
    fontSize: 18,
    margin: 4,
  },
});

const app = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    padding: 12,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  referenceContainers: {
    flex: 1,
    padding: 4,
    alignItems: "center",
    justifyContent: "flex-start",
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
  loading: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: "center",
  },
});

export { picker, app, rpe, textInput };
