import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

function ViewIcon(props) {
  return (
    <Svg width="27px" height="17px" viewBox="0 0 27 17" {...props}>
      <G
        id="Welcome-Screens"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G
          id="7.-Login-with-email"
          transform="translate(-316.000000, -376.000000)"
          fill="#24334C">
          <G id="show-password" transform="translate(316.000000, 376.000000)">
            <G id="show" transform="translate(0.000000, 0.000000)">
              <Path
                d="M13.1250001,16.4062501 C4.53776369,16.4062501 0.280341798,8.92007816 0.103359375,8.60159183 C-0.0344531251,8.35365238 -0.0344531251,8.05239261 0.103359375,7.80445316 C0.280341798,7.48617191 4.53776369,0 13.1250001,0 C21.7122364,0 25.9696583,7.48617191 26.1466407,7.80465824 C26.2844532,8.05259769 26.2844532,8.35385746 26.1466407,8.60179691 C25.9696583,8.92007816 21.7122364,16.4062501 13.1250001,16.4062501 Z M1.78561524,8.20189457 C2.76137696,9.68071293 6.59244143,14.7656251 13.1250001,14.7656251 C19.6782716,14.7656251 23.4923146,9.68481449 24.4643849,8.2043555 C23.4886231,6.72553714 19.6575587,1.64062501 13.1250001,1.64062501 C6.57172854,1.64062501 2.75768556,6.72143558 1.78561524,8.20189457 Z M13.1250001,13.1250001 C10.4109961,13.1250001 8.20312503,10.917129 8.20312503,8.20312503 C8.20312503,5.48912112 10.4109961,3.28125001 13.1250001,3.28125001 C15.839004,3.28125001 18.0468751,5.48912112 18.0468751,8.20312503 C18.0468751,10.917129 15.839004,13.1250001 13.1250001,13.1250001 Z M13.1250001,4.92187502 C11.3158008,4.92187502 9.84375004,6.39392581 9.84375004,8.20312503 C9.84375004,10.0123243 11.3158008,11.484375 13.1250001,11.484375 C14.9341993,11.484375 16.4062501,10.0123243 16.4062501,8.20312503 C16.4062501,6.39392581 14.9341993,4.92187502 13.1250001,4.92187502 Z"
                id="Show"
                fillRule="nonzero"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export {ViewIcon};
