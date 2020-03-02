import React from "react";
import { Entypo } from "@expo/vector-icons";
import { positiveHeaderButtonStyles } from "../../utils/navigation";
import { blue } from "../../utils/colors";

export const BackButton = ({ navigation }) => (
  <Entypo
    size={42}
    style={{ marginBottom: 8, color: blue }}
    name="chevron-small-left"
    onPress={() => navigation.goBack()}
  />
);
