import { Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "../components/Button";

import colors from "tailwindcss/colors";

export default function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center p-8">
      <Feather name="home" size={34} color={colors.green[500]} />
      <Text className="text-gray-200 text-2xl font-bold mt-4 mb-3">
        NativeWind
      </Text>
      <TextInput
        className="mb-3 w-full h-14 border-2 border-white border-solid 
      rounded-md text-white px-4 focus:border-green-500"
      />
      <TextInput
        className="w-full h-14 border-2 border-white border-solid 
      rounded-md text-white px-4 focus:border-green-500"
      />
      <Button className="w-full mt-8" />
    </View>
  );
}
