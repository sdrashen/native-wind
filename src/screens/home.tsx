import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "tailwindcss/colors";

export function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Feather name="home" size={34} color={colors.green[500]} />
      <Text className="text-gray-200 text-2xl font-bold mt-4">NativeWind</Text>
    </View>
  );
}
