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
  login_img: {
    width: 250,
    height: 300,
  },
  login_1: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    width: "110%",
    letterSpacing: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
  field_back: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    width:"110%"
  },
  btn_login: {
    backgroundColor: "#2b80ff",
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  login_btn_back:{
    height: 40,
    width: "110%",
  },
  login_2: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
    color: "white",
  },
  feild_1: {
    fontSize: 20,
    letterSpacing: 2,
    width:"70%",
    borderBottomWidth: 1,
    borderColor: "#a3a3a3",
  },
  login_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 45,
    gap: 15,
  },
  login_img1: {
    width: 35,
    height: 35,
  },
  login_txt1: {
    fontSize: 15,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 20,
  },
  login_com2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  login_txt2: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  login_txt3: {
    fontSize: 14,
    color: "#a3a3a3",
  },
  login_txt4: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2b80ff",
    letterSpacing:2
  },
  sign_1: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 2,
    marginBottom:20
  },
  btn_sign: {
    backgroundColor: "#2b80ff",
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  feildr_1: {
    fontSize: 20,
    letterSpacing: 2,
    width: "70%",
    borderBottomWidth: 1,
    borderColor: "#a3a3a3",
  },
  sign_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sign_txt1: {
    fontSize: 15,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign:"center"
  },
  sign_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    gap:20,
    alignItems: "center"
  },
  sign_com2: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    gap:5,
    alignItems: "center",
  },
  reg_scroll: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingLeft:20,
    paddingRight:20,
    flexDirection:"column",
    paddingBottom:"60%",
    gap:20
  },
  error_message:{
    color: "red",
    fontWeight: "bold",
    backgroundColor: "#ff9c9c",
    padding: 5,
    borderRadius: 2,
    width:"100%"
  }
});
