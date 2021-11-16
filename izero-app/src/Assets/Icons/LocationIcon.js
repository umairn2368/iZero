import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */

function LocationIcon(props) {
  return (
    <Svg width="26px" height="26px" viewBox="0 0 26 26" {...props}>
      <G
        id="Dashboard"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G
          id="3.-Search-Display"
          transform="translate(-314.000000, -185.000000)"
          fill="#24334C"
          fillRule="nonzero">
          <Path
            d="M316.196823,197.1875 C316.593682,191.860266 320.860266,187.593682 326.1875,187.196823 L326.1875,185.8125 C326.1875,185.364 326.5515,185 327,185 C327.4485,185 327.8125,185.364 327.8125,185.8125 L327.8125,187.196823 C333.139734,187.593682 337.406318,191.860266 337.803177,197.1875 L339.1875,197.1875 C339.636,197.1875 340,197.5515 340,198 C340,198.4485 339.636,198.8125 339.1875,198.8125 L337.803177,198.8125 C337.406318,204.139734 333.139734,208.406318 327.8125,208.803177 L327.8125,210.1875 C327.8125,210.636 327.4485,211 327,211 C326.5515,211 326.1875,210.636 326.1875,210.1875 L326.1875,208.803177 C320.860266,208.406318 316.593682,204.139734 316.196823,198.8125 L314.8125,198.8125 C314.364,198.8125 314,198.4485 314,198 C314,197.5515 314.364,197.1875 314.8125,197.1875 L316.196823,197.1875 Z M317.827188,198.8125 C318.216313,203.243237 321.756763,206.783687 326.1875,207.172812 L326.1875,206.395833 C326.1875,205.947333 326.5515,205.583333 327,205.583333 C327.4485,205.583333 327.8125,205.947333 327.8125,206.395833 L327.8125,207.172812 C332.243237,206.783687 335.783687,203.243237 336.172812,198.8125 L335.395833,198.8125 C334.947333,198.8125 334.583333,198.4485 334.583333,198 C334.583333,197.5515 334.947333,197.1875 335.395833,197.1875 L336.172812,197.1875 C335.783687,192.756763 332.243237,189.216313 327.8125,188.827188 L327.8125,189.604167 C327.8125,190.052667 327.4485,190.416667 327,190.416667 C326.5515,190.416667 326.1875,190.052667 326.1875,189.604167 L326.1875,188.827188 C321.756763,189.216313 318.216313,192.756763 317.827188,197.1875 L318.604167,197.1875 C319.052667,197.1875 319.416667,197.5515 319.416667,198 C319.416667,198.4485 319.052667,198.8125 318.604167,198.8125 L317.827188,198.8125 Z M327,201.25 C325.208167,201.25 323.75,199.791833 323.75,198 C323.75,196.208167 325.208167,194.75 327,194.75 C328.791833,194.75 330.25,196.208167 330.25,198 C330.25,199.791833 328.791833,201.25 327,201.25 Z M327,196.375 C326.104083,196.375 325.375,197.104083 325.375,198 C325.375,198.895917 326.104083,199.625 327,199.625 C327.895917,199.625 328.625,198.895917 328.625,198 C328.625,197.104083 327.895917,196.375 327,196.375 Z"
            id="Combined-Shape"
          />
        </G>
      </G>
    </Svg>
  );
}

export {LocationIcon};