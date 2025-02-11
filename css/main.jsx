import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    gap: "2%",
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  home_con10: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  home_category_view: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: "5%",
    alignItems: "center",
    overflowX: "scroll",
  },
  home_category_button: {
    backgroundColor: "#1178ff",
    width: width * 0.2,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    borderRadius: width * 0.02,
    overflow: "hidden",
  },
  home_img1: {
    width: width * 0.06,
    height: width * 0.06,
  },
  home_txt_6: {
    color: "white",
    fontWeight: "bold",
  },
  home_img2: {
    width: width * 0.8,
    height: height * 0.2,
    borderRadius: width * 0.02,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "5%",
  },
  home_img3: {
    width: width * 0.2,
    height: width * 0.2,
    overflow: "hidden",
    borderRadius: width * 0.02,
  },
  home_img4: { width: width * 0.04, height: width * 0.04 },
  home_header: {
    flex: 0.5,
    justifyContent: "space-between",
    gap: width * 0.02,
  },
  home_body: {
    flex: 0.5,
    justifyContent: "flex-start",
    gap: "2%",
    width: "100%",
  },
  home_scroll_sub_view: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
    overflowX: "scroll",
  },
  home_txt_1: {
    fontSize: width * 0.1,
    color: "#1178ff",
    fontWeight: "bold",
  },
  home_txt_2: {
    color: "#8e8e8e",
    fontSize: width * 0.05,
  },
  home_txt_3: {
    fontSize: width * 0.05,
    color: "white",
    fontWeight: "bold",
  },
  home_txt_4: {
    fontSize: width * 0.035,
    color: "white",
  },
  home_txt_7: {
    fontWeight: "bold",
  },
  home_txt_8: {
    color: "#8e8e8e",
  },
  home_con1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  home_con6: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
  },
  home_con8: {
    display: "flex",
    flexDirection: "row",
    gap: "10%",
  },
  home_con9: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10%",
  },
  intro_container: {
    flex: 1,
    padding: "5%",
    backgroundColor: "white",
  },
  intro_header: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.05,
  },
  intro_body: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  img_intro: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 1,
  },
  txt_1: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    textAlign: "center",
  },
  txt_4: {
    color: "white",
    fontSize: width * 0.05,
  },

  btn_2: {
    backgroundColor: "#2b80ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.3,
    borderRadius: width * 0.05,
    padding: width * 0.02,
  },
  dot_view: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.07,
    justifyContent: "space-between",
  },
  dot1: {
    backgroundColor: "#1178ff",
    width: width * 0.015,
    height: width * 0.015,
    borderRadius: width * 0.05,
  },
  dot2: {
    backgroundColor: "#b5b5b5",
    width: width * 0.015,
    height: width * 0.015,
    borderRadius: width * 0.05,
  },
  txt_2: {
    textAlign: "center",
    color: "#747474",
    width: "80%",
  },
  txt_3: {
    color: "#747474",
    fontSize: width * 0.05,
  },
  btn_1: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.3,
    borderRadius: width * 0.05,
    padding: width * 0.02,
  },

  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    backgroundColor: "white",
  },
  login_com1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: width * 0.02,
    alignItems: "center",
    width: "100%",
  },
  login_1: {
    fontSize: width * 0.1,
    fontWeight: "bold",
  },
  login_2: {
    fontSize: width * 0.05,
    letterSpacing: width * 0.007,
    fontWeight: "bold",
    color: "white",
  },
  login_header: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  login_body: {
    flex: 0.5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn_sign: {
    backgroundColor: "#116cff",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  input_field: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    width: "100%",
  },
  sign_txt1: {
    fontSize: width * 0.035,
    color: "#a3a3a3",
    fontWeight: "bold",
  },
  sign_container: {
    flex: 1,
    padding: "5%",
    backgroundColor: "white",
  },
  login_img1: {
    width: width * 0.1,
    height: width * 0.1,
  },
  login_txt2: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  login_txt3: {
    fontSize: width * 0.038,
    color: "#a3a3a3",
  },
  login_txt4: {
    fontSize: width * 0.038,
    fontWeight: "bold",
    color: "#2b80ff",
  },
  login_img: {
    width: "80%",
    height: "80%",
  },
  sign_1: {
    fontSize: width * 0.1,
    fontWeight: "bold",
  },
  sign_header: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sign_body: {
    // paddingTop: "10%",
    // flex:1,
    justifyContent: "space-between",
    alignItems: "center",
    // overflowY: "scroll",
    // gap: "5%",
    backgroundColor: "red",
  },
  btn_signup: {
    backgroundColor: "#116cff",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_container: {
    flex: 1,
  },

  profile_hearder: {
    flex: 0.5,
  },
  profile_body: {
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflowX: "scroll",
  },
  profile_hearder_1: {
    flex: 0.5,
    width: "100%",
    height: "100%",
  },
  profile_hearder_2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_hearder_2_1: {
    flex: 0.25,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  profile_hearder_2_2: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profile_image: {
    position: "absolute",
    bottom: "80%",
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.5,
    backgroundPosition: "center",
    overflow: "hidden",
  },

  profile_hearder_2_1_1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profile_edit_button: {
    backgroundColor: "#1178ff",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.02,
    borderRadius: width * 0.05,
    color: "white",
  },
  profile_edit_button_text: {
    color: "white",
    fontWeight: "bold",
  },
  profile_message_button: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.02,
    borderRadius: width * 0.05,
    color: "white",
    borderWidth: width * 0.002,
    borderColor: "#1178ff",
  },
  profile_message_button_text: {
    color: "#1178ff",
    fontWeight: "bold",
  },
  profile_txt_1: {
    fontWeight: "bold",
    fontSize: width * 0.05,
  },
  profile_txt_2: {
    fontWeight: "light",
    fontSize: width * 0.03,
  },
  profile_story_card: {
    width: "33.3%",
    aspectRatio: 1,
  },
  profile_story_card_background: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  profile_txt_3: {
    color: "white",
    fontWeight: "bold",
  },
  profile_back_button: {
    width: width * 0.05,
    height: width * 0.05,
    margin: width * 0.05,
  },
  profile_update_container: {
    flex: 1,
    backgroundColor: "white",
  },

  profile_update_hearder: {
    flex: 0.3,
  },
  profile_update_body: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflowY: "scroll",
    padding: "5%",
  },
  profile_update_hearder_1: {
    flex: 0.9,
    width: "100%",
    height: "100%",
  },
  profile_update_hearder_2: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },

  profile_update_image: {
    position: "absolute",
    bottom: width * 0.005,
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.5,
    backgroundPosition: "center",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_edit: {
    backgroundColor: "#45ff25",
    width: "80%",
    borderRadius: width * 0.05,
    padding: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_update_header_3: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "100%",
    padding: width * 0.02,
  },
  header_name: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.05,
  },
  readscreen_container: { flex: 1 },
  readscreen_comment_section: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  comment_con: {
    justifyContent: "space-evenly",
    width: width * 0.5,
  },
  comment_txt: { fontSize: width * 0.025, color: "#848484" },
  readscreen_dark_view: { flex: 0.5, backgroundColor: "#0000008c" },
  close_img: { width: width * 0.05, height: width * 0.05 },
  comment_scroll: { padding: width * 0.02 },
  comment_card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: width * 0.02,
    padding: width * 0.02,
    gap: width * 0.02,
  },
  comment_profile: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.5,
  },
  comment_header: {
    flexDirection: "row",
    width: "100%",
    padding: width * 0.02,
    alignItems: "center",
    justifyContent: "space-between",
  },
  readscreen_header: {
    flex: 0.3,
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  readscreen_body: { flex: 0.7, padding: "5%" },
  readscreen_img2: { width: width * 0.05, height: width * 0.05 },
  readscreen_txt1: {
    fontWeight: "bold",
  },
  readscreen_txt3: {
    fontSize: width * 0.035,
    color: "#888888",
    fontWeight: "light",
    overflowY: "scroll",
    paddingTop: width * 0.07,
  },
  readscreen_txt4: {
    color: "#1178ff",
    fontWeight: "bold",
  },
  profile_back_button: {
    width: width * 0.1,
    height: width * 0.1,
  },
  readscreen_con6: {
    display: "flex",
    flexDirection: "row",
    gap: width * 0.05,
    margin: width * 0.02,
  },
  readscreen_con7: {
    justifyContent: "space-around",
    width: width * 0.6,
  },
  readscreen_con8: {
    flex: 0.09,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  readscreen_con9: {
    flex: 0.91,
  },
  readscreen_follow_button: {
    backgroundColor: "#1178ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.09,
    width: width * 0.25,
  },
  search_container: { flex: 1, backgroundColor: "white" },
  search_header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profile_back_button: {
    width: width * 0.1,
    height: width * 0.1,
  },
  search_bar: {
    width: "80%",
  },
  search_body: {
    flex: 0.9,
    padding: width * 0.02,
    gap: width * 0.02,
    overflowY: "scroll",
  },
  home_con6: {
    display: "flex",
    flexDirection: "row",
    gap: "5%",
  },
  home_txt_8: {
    color: "#8e8e8e",
  },
  home_txt_7: {
    fontWeight: "bold",
  },
  home_con10: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  home_img3: {
    width: width * 0.15,
    height: width * 0.15,
    overflow: "hidden",
    borderRadius: width * 0.02,
  },
  notification_container: {
    flex: 1,
    padding: width * 0.02,
    gap: width * 0.05,
  },
  notification_txt_1: {
    flex: 0.1,
    fontSize: width * 0.075,
    fontWeight: "bold",
  },
  notification_card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: width * 0.02,
  },
  notification_img_1: {
    width: width * 0.1,
    height: width * 0.1,
    overflow: "hidden",
    borderRadius: width * 0.1,
  },
  notification_view_1: { width: "60%", flexDirection: "column" },
  notification_txt_2: { fontWeight: "bold" },
  notification_img_2: {
    width: width * 0.25,
    height: width * 0.1,
    overflow: "hidden",
    borderRadius: width * 0.01,
  },
  notification_view_2: { flex: 0.9, gap: width * 0.02 },
  setting_view_1: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    padding: "5%",
  },
  setting_txt_1: { fontWeight: "bold" },
  setting_card_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
  },
  setting_view_2: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
  },
  setting_txt_2: { color: "#8e8e8e", fontSize: width * 0.03 },
  message_container: {
    flex: 1,
    backgroundColor: "white",
  },
  message_txt: { textAlign: "right", fontSize: width * 0.025, color: "gray" },
  message_header: {
    flex: 0.05,
    padding: width * 0.03,
    alignItems: "center",
    flexDirection: "row",
    gap: width * 0.02,
  },
  message_body: {
    flex: 0.8,
    overflowY: "scroll",
    padding: "2%",
  },
  message_body_1: {
    marginBottom: width * 0.02,
  },
  message_footer: {
    backgroundColor: "white",
  },
  profile_back_button: {
    width: width * 0.1,
    height: width * 0.1,
  },
  header_name: {
    fontWeight: "bold",
    fontSize: width * 0.05,
  },
  message_card: {
    borderBottomRightRadius: width * 0.02,
    borderBottomLeftRadius: width * 0.02,
    padding: width * 0.02,
  },
  chatlist_container: { flex: 1, padding: width * 0.02, gap: width * 0.05 },
  search_txt: {
    borderRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
  },
  chatlist_card: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: width * 0.02,
  },
  chatlist_img_1: {
    width: width * 0.15,
    height: width * 0.15,
    overflow: "hidden",
    borderRadius: width * 0.1,
  },
  chatlist_view_1: {
    justifyContent: "space-around",
    width: "60%",
  },
  chatlist_txt_1: { fontSize: width * 0.025, color: "#848484" },
  create_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: width * 0.02,
    gap: width * 0.05,
  },
  create_img_1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.5,
    borderRadius: width * 0.02,
    overflow: "hidden",
  },
  create_card_1: { justifyContent: "center", alignItems: "center" },
  input_field1: {
    borderRadius: width * 0.02,
    borderTopRightRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02,
    width: "100%",
  },
  create_img_2: { backgroundColor: "white", borderRadius: width * 0.02 },
  darktheme_view_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
  },
  darktheme_view_2: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
  },
  error_message: {
    fontWeight: "bold",
    color: "red",
  },
});
