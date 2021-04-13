import React from "react";
import { Text, View } from "../../components/Themed";
import { styles } from "../theme/appTheme";

interface Props {
  texto: string;
  color?: string;
}

function BotonCalc({ texto, color = "#2D2D2D" }: Props) {
  return (
    <View style={{ ...styles.boton, backgroundColor: color }}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  );
}

export default BotonCalc;
