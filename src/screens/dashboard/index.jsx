import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";

import { submitGetDashboardData } from "./actions/actions";
import { CustomSnackbar } from "src/components/customSnackbar";
import { GapV } from "src/components/gap";
import { StickyHeader } from "src/components/stickyHeader";
import VirtualizedView from "src/components/virtualizedBackedContainer";
import { callApi } from "src/constants/apiCall";
import gloabalStyle, { mgMs, mgVm, zIndexM } from "src/styles/index";

function Dashboard({
  submitLoginReducer,
  submitGetDashboardData,
  //
  getDashboardDataReducer,
}) {
  const { colors } = useTheme();
  const gStyle = gloabalStyle();
  const style = styles(colors);

  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackMsg] = useState("");
  const [refreshing] = useState(false);
  const [marginToAvoid, setMarginToAvoid] = useState(0);
  const [loading, setLoading] = useState(false);

  function onDismissSnackBar() {
    setVisibleSnack(false);
  }

  function handleSubmitGetDashboardData() {
    callApi({
      data: {},
      setLoading: setLoading,
      callApiReducer: getDashboardDataReducer,
      submitCallApi: submitGetDashboardData,
      successFunc: () => {},
      errFunc: () => {},
      catchFunc: () => {},
    });
  }

  return (
    <Animated.View style={[gStyle.container]}>
      <View style={style.dashboardHeader}>
        <StickyHeader
          profileUrl={submitLoginReducer.data?.user_pp}
          title={submitLoginReducer.data?.session?.employeename}
          subtitle={`Employee Code : ${submitLoginReducer.data?.users?.empCode}`}
          setMarginToAvoid={setMarginToAvoid}
        />
      </View>

      <VirtualizedView
        contentContainerStyle={[gStyle.fg]}
        refresh={true}
        refreshing={refreshing}
        onRefresh={async () => {
          try {
            handleSubmitGetDashboardData();
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {loading ? null : (
          <View style={[style.content, { marginTop: marginToAvoid }]}>
            {/* CONTENT */}
          </View>
        )}
        <GapV />
      </VirtualizedView>

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

function mapStateToProps({ submitLoginReducer, getDashboardDataReducer }) {
  return {
    submitLoginReducer,
    getDashboardDataReducer,
  };
}

export default connect(mapStateToProps, { submitGetDashboardData })(Dashboard);

const styles = (colors) =>
  StyleSheet.create({
    dashboardHeader: {
      minHeight: 80,
      backgroundColor: colors.notification,
      paddingHorizontal: mgMs,
      zIndex: zIndexM,
    },

    content: {
      flex: 1,
      marginTop: mgVm,
      paddingHorizontal: mgMs,
    },
  });
