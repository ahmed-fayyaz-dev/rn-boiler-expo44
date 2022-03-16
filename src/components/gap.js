import React from "react";
import { View } from "react-native";
import { mgS, mgM, mgL } from "../styles";

export function GapV({ small, large, xL }) {
  return (
    <View
      style={
        small
          ? { marginTop: mgS }
          : large
          ? { marginTop: mgL }
          : xL
          ? { marginTop: mgL * 2 }
          : { marginTop: mgM }
      }
    />
  );
}

export function GapH({ small, large, xL }) {
  return (
    <View
      style={
        small
          ? { marginLeft: mgS }
          : large
          ? { marginLeft: mgL }
          : xL
          ? { marginLeft: mgL * 2 }
          : { marginLeft: mgM }
      }
    />
  );
}
