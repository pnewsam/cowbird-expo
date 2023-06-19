import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QueueScreen } from "../screens/QueueScreen";
import { ComposeScreen } from "../screens/ComposeScreen";

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Queue" component={QueueScreen} />
      <Tab.Screen name="Write" component={ComposeScreen} />
    </Tab.Navigator>
  );
}
