import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

function HeartIcon(props) {
  return (
    <Svg width="20px" height="18px" viewBox="0 0 20 18" {...props}>
      <G id="Jobs" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <G
          id="2.-Job-Chosen-(Description)"
          transform="translate(-320.000000, -142.000000)"
          fill="#24334C"
          fillRule="nonzero"
        >
          <G id="heart-copy" transform="translate(320.000000, 142.000000)">
            <Path
              d="M10,17.9808799 C9.71527102,17.9808799 9.44076539,17.8766447 9.22683715,17.6872944 C8.4188843,16.9733758 7.63992309,16.3024774 6.95266723,15.7106805 L6.94915773,15.7075966 C4.93423461,13.9724507 3.19427492,12.4739926 1.98364258,10.9978927 C0.630340586,9.34770766 0,7.78310033 0,6.07385897 C0,4.41318872 0.56350707,2.88111636 1.58660891,1.75966283 C2.62191773,0.624948592 4.04251098,0 5.5871582,0 C6.7416382,0 7.79891969,0.368832237 8.7295532,1.0961657 C9.19921875,1.46330179 9.62493898,1.91262336 10,2.43672904 C10.3752136,1.91262336 10.8007812,1.46330179 11.2705994,1.0961657 C12.2012329,0.368832237 13.2585144,0 14.4129944,0 C15.957489,0 17.3782348,0.624948592 18.4135437,1.75966283 C19.4366455,2.88111636 20,4.41318872 20,6.07385897 C20,7.78310033 19.369812,9.34770766 18.01651,10.9977385 C16.8058777,12.4739926 15.0660705,13.9722965 13.0514527,15.7072882 C12.3629761,16.3000103 11.5827942,16.9719881 10.7730102,17.6876028 C10.5592346,17.8766447 10.2845764,17.9808799 10,17.9808799 L10,17.9808799 Z M5.5871582,1.18390216 C4.37362672,1.18390216 3.25881957,1.67331414 2.44781492,2.56208882 C1.62475586,3.46427838 1.17141723,4.71140009 1.17141723,6.07385897 C1.17141723,7.51141034 1.7001343,8.79708059 2.88558961,10.2424959 C4.03137207,11.6396484 5.73562621,13.1072677 7.70889281,14.8066406 L7.71255492,14.8097245 C8.40240477,15.4038343 9.18441773,16.077354 9.99832152,16.7965152 C10.8171082,16.0759663 11.6003418,15.4013672 12.2915649,14.8063322 C14.2646789,13.1069593 15.9687805,11.6396484 17.114563,10.2424959 C18.2998657,8.79708059 18.8285828,7.51141034 18.8285828,6.07385897 C18.8285828,4.71140009 18.3752441,3.46427838 17.5521851,2.56208882 C16.741333,1.67331414 15.6263733,1.18390216 14.4129944,1.18390216 C13.5240173,1.18390216 12.7078247,1.46946955 11.9871521,2.03258637 C11.3449097,2.53464229 10.897522,3.16930508 10.6352234,3.61338403 C10.5003357,3.84174549 10.2629089,3.97805305 10,3.97805305 C9.73709105,3.97805305 9.4996643,3.84174549 9.3647766,3.61338403 C9.10263062,3.16930508 8.65524293,2.53464229 8.01284789,2.03258637 C7.29217531,1.46946955 6.47598266,1.18390216 5.5871582,1.18390216 Z"
              id="Shape"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export {HeartIcon}
