import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

function FinanceIcon(props) {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 25 25" {...props}>
      <G
        id="Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G
          id="iboard-Navigation"
          transform="translate(-251.000000, -19.000000)"
          fill="#24334C">
          <G id="Finance" transform="translate(251.000000, 19.000000)">
            <G id="receipt">
              <Path
                d="M24.2142857,11 C24.648,11 25,11.3484444 25,11.7777778 L25,24.2222222 C25,24.6515556 24.648,25 24.2142857,25 L14.7857143,25 C14.352,25 14,24.6515556 14,24.2222222 L14,11.7777778 C14,11.3484444 14.352,11 14.7857143,11 L24.2142857,11 Z M23.4285714,23.4444444 L23.4285714,15.6666667 L15.5714286,15.6666667 L15.5714286,23.4444444 L23.4285714,23.4444444 Z M23.4285714,14.1111111 L23.4285714,12.5555556 L15.5714286,12.5555556 L15.5714286,14.1111111 L23.4285714,14.1111111 Z M17,17 L19,17 L19,19 L17,19 L17,17 Z M20,17 L22,17 L22,19 L20,19 L20,17 Z M17,20 L19,20 L19,22 L17,22 L17,20 Z M20,20 L22,20 L22,22 L20,22 L20,20 Z M20,0 C22.2064,0 24,1.7514804 24,3.9060669 L24,7.03092043 C24,7.46215021 23.6416,7.81213381 23.2,7.81213381 L17.6,7.81213381 L17.6,8.59334719 C17.6,9.02457697 17.2416,9.37456057 16.8,9.37456057 C16.3584,9.37456057 16,9.02457697 16,8.59334719 L16,3.9060669 C16,3.02329578 16.312,2.21708357 16.8192,1.56242676 L4,1.56242676 C2.6768,1.56242676 1.6,2.61393997 1.6,3.9060669 L1.6,23.0645438 L4.504,21.930222 C4.6944,21.8536631 4.9072,21.8536631 5.0976,21.930222 L8.8,23.3770292 L12.5024,21.930222 C12.9088,21.7677296 13.3776,21.9645954 13.5408,22.3661391 C13.7056,22.7645579 13.5072,23.2192241 13.096,23.3801541 L9.096,24.9425808 C8.9056,25.0191397 8.6928,25.0191397 8.5024,24.9425808 L4.8,23.4957736 L1.0976,24.9425808 C1.0016,24.9800791 0.9008,24.9988282 0.8,24.9988282 C0.6416,24.9988282 0.4864,24.9535178 0.352,24.8644595 C0.1312,24.7191538 0,24.4769776 0,24.2176148 L0,3.9060669 C0,1.7514804 1.7936,0 4,0 L20,0 Z M22.4,6.24970704 L22.4,3.9060669 C22.4,2.61393997 21.3232,1.56242676 20,1.56242676 C18.6768,1.56242676 17.6,2.61393997 17.6,3.9060669 L17.6,6.24970704 L22.4,6.24970704 Z M13.2142857,5 C13.648,5 14,5.448 14,6 C14,6.552 13.648,7 13.2142857,7 L3.78571429,7 C3.352,7 3,6.552 3,6 C3,5.448 3.352,5 3.78571429,5 L13.2142857,5 Z M10.2,11 C10.6416,11 11,11.448 11,12 C11,12.552 10.6416,13 10.2,13 L3.8,13 C3.3584,13 3,12.552 3,12 C3,11.448 3.3584,11 3.8,11 L10.2,11 Z M8.25,14 C8.664,14 9,14.448 9,15 C9,15.552 8.664,16 8.25,16 L3.75,16 C3.336,16 3,15.552 3,15 C3,14.448 3.336,14 3.75,14 L8.25,14 Z M8.25,17 C8.664,17 9,17.448 9,18 C9,18.552 8.664,19 8.25,19 L3.75,19 C3.336,19 3,18.552 3,18 C3,17.448 3.336,17 3.75,17 L8.25,17 Z"
                id="Combined-Shape"
                fillRule="nonzero"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export {FinanceIcon};