import React, { useState, useEffect } from "react";
// import i18n from "i18n-js";
import { View } from "react-native";
// import { useTheme } from "react-native-paper";
import Animated, { BounceInUp, Layout, FadeOut } from "react-native-reanimated";
import { connect } from "react-redux";

//CustomFuncs/components/etc
import { CustomSnackbar } from "src/components/customSnackbar";
import VirtualizedView from "src/components/virtualizedBackedContainer";

//REDUX
import { submitGetDashboardDataDetail } from "src/screens/dashboard/actions/actions";
import gloabalStyle from "src/styles/index";

function Temp() {
  // const t = (v) => i18n.t(v); // Getting translated text
  // const { colors } = useTheme();
  const gStyle = gloabalStyle();
  // const style = styles(colors);

  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackMsg] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  function onDismissSnackBar() {
    setVisibleSnack(false);
  }

  return (
    <Animated.View
      entering={BounceInUp}
      exiting={FadeOut}
      layout={Layout.springify()}
      style={gStyle.container}
    >
      <VirtualizedView contentContainerStyle={[gStyle.fg]}>
        <View style={gStyle.content}>{/* Content */}</View>
      </VirtualizedView>

      {/* Modals and popups */}
      <CustomSnackbar
        visible={visibleSnack}
        onDismiss={onDismissSnackBar}
        style={gStyle.snackBar}
        textStyle={gStyle.snackText}
        msg={`${snackMsg}`}
      />
    </Animated.View>
  );
}

function mapStateToProps({ detailsBankBalReducer, submitLoginReducer }) {
  return {
    detailsBankBalReducer,
    submitLoginReducer,
  };
}

export default connect(mapStateToProps, { submitGetDashboardDataDetail })(Temp);

// const styles = (colors) =>
//   StyleSheet.create({

//   });
