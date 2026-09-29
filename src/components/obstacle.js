import React from "react";
import { View, Image } from "react-native";

const Obstacles = ({
  color,
  obstacleWidth,
  obstacleHeight,
  randomButton,
  gap,
  obstacleLeft,
}) => {
  return (
    <>
      <Image
        style={{
          position: "absolute",
          zIndex: 0,
          width: obstacleWidth,
          height: 500,
          left: obstacleLeft,
          bottom: randomButton + obstacleHeight + gap,
        }}
        source={require("../../assets/pipe.png")}
        resizeMode="cover"
      />

      <Image
        style={{
          position: "absolute",
          zIndex: 0,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstacleLeft,
          bottom: randomButton,
        }}
        source={require("../../assets/pipe.png")}
        resizeMode="cover"
      />
    </>
  );
};

export default Obstacles;
