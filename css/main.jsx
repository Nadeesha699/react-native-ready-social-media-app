import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inro_container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inro_container1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  inro_container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  img_intro: {
    width: 250,
    height: 300,
  },
  txt_1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt_4: {
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
  },

  btn_2: {
    backgroundColor: "#2b80ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 20,
    height: 40,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  dot_view: {
    display: "flex",
    flexDirection: "row",
    width: 25,
    justifyContent: "space-between",
  },
  dot1: {
    backgroundColor: "black",
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  dot2: {
    backgroundColor: "#b5b5b5",
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  txt_2: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#747474",
  },
  txt_3: {
    color: "#747474",
    fontSize: 20,
    letterSpacing: 2,
  },
  btn_1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 20,
    height: 40,
  },
});
