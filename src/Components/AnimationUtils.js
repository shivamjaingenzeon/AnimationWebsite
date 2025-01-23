import React from "react";
import DeterminateLoadingAnimationSourceCode from "../Animations/DeterminateLoadingAnimation/DeterminateLoadingAnimationSourceCode";
import FaceLoaderSourceCode from "../Animations/FaceLoader/FaceLoaderSourceCode";
import HatLoaderSourceCode from "../Animations/HatLoader/HatLoaderSourceCode";
import HourGlassLoaderSourceCode from "../Animations/HourGlassLoader/HourGlassLoaderSourceCode";
import LoadingAnimation2SourceCode from '../Animations/LoadingAnimation2/LoadingAnimation2SourceCode';
import OrbitingCirclesSourceCode from "../Animations/OrbitingCircle/OrbitingCirclesSourceCode";
import PulseLoaderSourceCode from "../Animations/PulseLoader/PulseLoaderSourceCode";
import RainbowLoadingSpinnerSourceCode from "../Animations/RainbowLoadingSpinner/RainbowLoadingSpinnerSourceCode";
import RingLoaderSourceCode from "../Animations/RingLoader/RingLoaderSourceCode";
import RotateLoaderSourceCode from "../Animations/RotateLoader/RotateLoaderSourceCode";
import WaveAnimationSourceCode from "../Animations/WaveAnimation/WaveAnimationSourceCode";
import WaveLoaderSourceCode from "../Animations/WaveLoader/WaveLoaderSourceCode";
import BouncingBallSourceCode from "../Components/BouncingBall/BouncingBallSourceCode";
import CircularLoadingSourceCode from "../Components/CircularLoading/CircularLoadingSourceCode";
import CopyButtonSourceCode from "../Components/CopyButton/CopyButtonSourceCode";
import DotLoadingAnimationSourceCode from "../Components/DotLoadingAnimation/DotLoadingSourcode";
import LinearLoadingSourceCode from "../Components/LoadingComponent/LoadingSourceCode";
import LoadingScreenSourceCode from "../Components/LoadingScreen/LoadingScreenSourceCode";

export const animations = [
  {
    name: "Orbiting Circle",
  },

  {
    name: "Determinate Loading Animation",
  },
  {
    name: "Linear Loading",
    description: "Description for Animation 1",
  },
  {
    name: "Face Loader",
  },
  {
    name: "Ring Loader",
  },
  {
    name: "Rainbow Loading Spinner",
  },
  {
    name: "Hour Glass Loader",
  },
  {
    name: "Wave Animation",
  },
  {
    name: "Loading Screen",
    description: "Description for Animation 2",
  },
  {
    name: "Pulse Loader",
    description: "Description for Animation 2",
  },
  {
    name: "Wave Loader",
    description: "Description for Animation 2",
  },
  {
    name: "Circular Loading",
    description: "Description for Animation 2",
  },
  {
    name: "Message Typing Loading",
    description: "Description for Animation 2",
  },
  {
    name: "Bouncing Ball",
    description: "Description for Animation 2",
  },
  {
    name: "Rotate Loader",
  }
];

export const sourceCodeComponents = {
  "Linear Loading": LinearLoadingSourceCode,
  "Loading Screen": LoadingScreenSourceCode,
  "Circular Loading": CircularLoadingSourceCode,
  "Message Typing Loading": DotLoadingAnimationSourceCode,
  "Copy Text Icon": CopyButtonSourceCode,
  "Bouncing Ball": BouncingBallSourceCode,
  "Pulse Loader": PulseLoaderSourceCode,
  "Wave Loader": WaveLoaderSourceCode,
  "Rotate Loader": RotateLoaderSourceCode,
  "Face Loader": FaceLoaderSourceCode,
  "Hat Loader": HatLoaderSourceCode,
  "Orbiting Circle": OrbitingCirclesSourceCode,
  "Wave Animation": WaveAnimationSourceCode,
  "Determinate Loading Animation": DeterminateLoadingAnimationSourceCode,
  "Hour Glass Loader": HourGlassLoaderSourceCode,
  "Rainbow Loading Spinner": RainbowLoadingSpinnerSourceCode,
  "Ring Loader": RingLoaderSourceCode,
};

export const loadCssContent = async (animationName) => {
  switch (animationName) {
    case "Linear Loading":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Components/LoadingComponent/Loading.css");
    case "Loading Screen":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Components/LoadingScreen/LoadingScreen.css"
      );
    case "Circular Loading":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Components/CircularLoading/CircularLoading.css"
      );
    case "Message Typing Loading":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Components/DotLoadingAnimation/DotLoading.css"
      );
    case "Copy Text Icon":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Components/CopyButton/CopyButton.css");
    case "Bouncing Ball":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Components/BouncingBall/BouncingBall.css");
    case "Gear":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Components/Gear/Gear.css");
    case "Pulse Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/PulseLoader/PulseLoader.css");
    case "Wave Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/WaveLoader/WaveLoader.css");
    case "Wave Animation":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Animations/WaveAnimation/WaveAnimation.css"
      );
    case "Hour Glass Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Animations/HourGlassLoader/HourGlassLoader.css"
      );
    case "Rotate Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/RotateLoader/RotateLoader.css");
    case "Turtle Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/TurtleLoader/TurtleLoader.css");
    case "Birds Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/BirdsLoader/BirdsLoader.css");
    case "Dino Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/DinoLoader/DinoLoader.css");
    case "Face Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/FaceLoader/FaceLoader.css");
    case "Hat Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/HatLoader/HatLoader.css");
    case "Orbiting Circle":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Animations/OrbitingCircle/OrbitingCircles.css"
      );
    case "Determinate Loading Animation":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Animations/DeterminateLoadingAnimation/DeterminateLoadingAnimation.css"
      );
    case "Rainbow Loading Spinner":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import(
        "!!raw-loader!../Animations/RainbowLoadingSpinner/RainbowLoadingSpinner.css"
      );
    case "Ring Loader":
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return import("!!raw-loader!../Animations/RingLoader/RingLoader.css");

    default:
      return null;
  }
};

export const loadAnimationComponent = (animationName) => {
  switch (animationName) {
    case "Linear Loading":
      return React.lazy(() => import("../Components/LoadingComponent/Loading"));
    case "Loading Screen":
      return React.lazy(() =>
        import("../Components/LoadingScreen/LoadingScreen")
      );
    case "Circular Loading":
      return React.lazy(() =>
        import("../Components/CircularLoading/CircularLoading")
      );
    case "Message Typing Loading":
      return React.lazy(() =>
        import("../Components/DotLoadingAnimation/DotLoadingAnimation")
      );
    case "Copy Text Icon":
      return React.lazy(() => import("../Components/CopyButton/CopyButton"));
    case "Bouncing Ball":
      return React.lazy(() =>
        import("../Components/BouncingBall/BouncingBall")
      );
    case "Gear":
      return React.lazy(() => import("../Components/Gear/Gear"));
    case "Pulse Loader":
      return React.lazy(() => import("../Animations/PulseLoader/PulseLoader"));
    case "Wave Loader":
      return React.lazy(() => import("../Animations/WaveLoader/WaveLoader"));
    case "Wave Animation":
      return React.lazy(() =>
        import("../Animations/WaveAnimation/WaveAnimation")
      );
    case "Rotate Loader":
      return React.lazy(() =>
        import("../Animations/RotateLoader/RotateLoader")
      );
    case "Turtle Loader":
      return React.lazy(() =>
        import("../Animations/TurtleLoader/TurtleLoader")
      );
    case "Birds Loader":
      return React.lazy(() => import("../Animations/BirdsLoader/BirdsLoader"));
    case "Dino Loader":
      return React.lazy(() => import("../Animations/DinoLoader/DinoLoader"));
    case "Face Loader":
      return React.lazy(() => import("../Animations/FaceLoader/FaceLoader"));
    case "Hat Loader":
      return React.lazy(() => import("../Animations/HatLoader/HatLoader"));
    case "Orbiting Circle":
      return React.lazy(() =>
        import("../Animations/OrbitingCircle/OrbitingCircles")
      );
    case "Determinate Loading Animation":
      return React.lazy(() =>
        import(
          "../Animations/DeterminateLoadingAnimation/DeterminateLoadingAnimation"
        )
      );
    case "Hour Glass Loader":
      return React.lazy(() =>
        import("../Animations/HourGlassLoader/HourGlassLoader")
      );
    case "Rainbow Loading Spinner":
      return React.lazy(() =>
        import("../Animations/RainbowLoadingSpinner/RainbowLoadingSpinner")
      );
    case "Ring Loader":
      return React.lazy(() => import("../Animations/RingLoader/RingLoader"));
    default:
      return null;
  }
};
