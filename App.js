import "react-native-gesture-handler";
import "expo-dev-client";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { store, persistor } from "./src/redux/store";
import AppNavigator from "./src/navigator/navigation";
import { settings } from "./settings";

settings;

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

// export default Sentry.Native.wrap(App)     ;
