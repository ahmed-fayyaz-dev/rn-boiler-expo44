import React from "react";
import { View } from "react-native";
import { Button, FAB, IconButton, useTheme } from "react-native-paper";

import { CustomSubheading, CustomText } from "./customText";
import { bRss, hitSlopS, mgS } from "src/styles/index";
import gloablStyle from "src/styles/index";

export const CustomRoundButton = ({
  title,
  onPress,
  loading,
  icon,
  style,
  contentStyle,
  compact,
  mode,
  uppercase,
  children,
  ...props
}) => {
  const { colors } = useTheme();
  const gStyle = gloablStyle(colors);

  return (
    <Button
      mode={mode || "contained"}
      onPress={onPress}
      loading={loading}
      disabled={loading}
      uppercase={uppercase}
      compact={compact}
      // color={colors.notification}
      style={[gStyle.roundButton, style]}
      icon={icon}
      contentStyle={[gStyle.fdrr, gStyle.roundButton, contentStyle]}
      {...props}
    >
      {title}
      <React.Fragment>{children}</React.Fragment>
    </Button>
  );
};

export const CustomSquareButton = ({
  color,
  title,
  onPress,
  loading,
  icon,
  style,
  contentStyle,
  mode,
  ...props
}) => {
  const { colors } = useTheme();
  const gStyle = gloablStyle(colors);

  return (
    <Button
      mode={mode || "contained"}
      onPress={onPress}
      loading={loading}
      disabled={loading}
      color={color}
      icon={icon}
      // compact
      style={[gStyle.elevationS, style]}
      contentStyle={[contentStyle]}
      theme={{ roundness: bRss }}
      {...props}
    >
      {title}
    </Button>
  );
};

export const CustomIconButton = ({ onPress, bg, size, color, name, style }) => (
  <IconButton
    hitSlop={hitSlopS}
    icon={name}
    color={color}
    style={[bg && { backgroundColor: bg }, style]}
    size={size}
    onPress={onPress}
  />
);

export const CustomFab = ({ onPress, color, icon, small, style, visible }) => (
  <FAB
    visible={visible}
    hitSlop={hitSlopS}
    style={[{ margin: mgS }, style]}
    small={small}
    icon={icon}
    color={color}
    onPress={onPress}
  />
);

export const CustomDateButton = ({
  // color,
  title,
  value,
  onPress,
  loading,
  icon,
  style,
  contentStyle,
  mode,
  ...props
}) => {
  const { colors } = useTheme();
  // const styleLocal = styleL(colors);
  const gStyle = gloablStyle(colors);

  return (
    <View style={[gStyle.titledButtonView, gStyle.elevationS]}>
      <CustomText style={[gStyle.titledButtonTitle]}>{title}</CustomText>
      <Button
        mode={mode || "text"}
        onPress={onPress}
        loading={loading}
        disabled={loading}
        color={colors.surface}
        icon={icon}
        // compact
        style={[style]}
        contentStyle={[gStyle.titledButton, contentStyle]}
        theme={{ roundness: bRss }}
        {...props}
      >
        <CustomSubheading>{value}</CustomSubheading>
      </Button>
    </View>
  );
};

// const styleL = (colors) => StyleSheet.create({});
