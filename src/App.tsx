import { ReactNode } from "react";

import { View, Text, StatusBar } from "react-native";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#332877" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#332877",
        }}
      >
        <Text>App</Text>
      </View>
    </>
  );
}

export default App;
