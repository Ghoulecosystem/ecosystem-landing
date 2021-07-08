import React from "react";
import ReactLottie from "react-lottie";

export const Lottie = ({ element, defaultElement, height, width }) =>
  element ? (
    <ReactLottie
      options={{
        loop: true,
        autoplay: true,
        animationData: element,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      }}
      height={height}
      width={width}
    />
  ) : (
    defaultElement
  );
