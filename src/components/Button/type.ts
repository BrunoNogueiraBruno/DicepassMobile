import { ReactNode } from "react";

export interface IButton {
  title: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  label?: string;
  onPress: () => void;
  accessibilityLabel?: string,
  size?: "s" | "m" | "l";
}
