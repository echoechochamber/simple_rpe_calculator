import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const picker = StyleSheet.create({
  container: {
    padding: 4,
    margin: 4,
    height: 40,
    width: "100%"
  },
  label: {
    fontFamily: "cabin-semibold",
    fontSize: 18
  }
});

const defaultPicker = StyleSheet.create({
  placeholder: { fontSize: 12 },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

const textInput = StyleSheet.create({
  label: {
    fontFamily: "cabin-semibold",
    fontSize: 18
  },
  input: {
    padding: 4,
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 0.5
  }
});

const rpe = StyleSheet.create({
  text: {
    fontFamily: "cabin-semibold",
    fontSize: 16,
    margin: 4
  }
});

const toggle = StyleSheet.create({
  container: {
    padding: 4
  },
  horizontal: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    fontFamily: "cabin-semibold",
    fontSize: 18
  },
  label: {
    fontFamily: "cabin-regular",
    fontSize: 12
  }
});

const app = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    padding: 12
  },
  bottomContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    height: "60%",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  referenceContainers: {
    flex: 1,
    padding: 4,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  appTitle: {
    fontFamily: "roboto-bold",
    fontSize: 36
  },
  sectionTitle: {
    fontFamily: "roboto-black",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 12
  },
  loading: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    justifyContent: "center"
  }
});

export { defaultPicker, picker, app, rpe, textInput, toggle };
