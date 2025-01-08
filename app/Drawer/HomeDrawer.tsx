import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNaviagte from "../Navigate/HomeNavigate";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeNaviagte}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
