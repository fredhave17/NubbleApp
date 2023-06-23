import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function HeartFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 19" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99999 1.48508C11.0896 0.533052 12.4816 0 13.9331 0C15.5596 0 17.1112 0.669229 18.2466 1.84717C19.3734 3.01549 20 4.58939 20 6.22297C20 7.8567 19.3733 9.43076 18.2464 10.599C17.5219 11.3503 16.797 12.1204 16.0675 12.8954C14.5825 14.4728 13.0782 16.0709 11.518 17.574L11.5135 17.5784C10.6392 18.4085 9.25469 18.3786 8.41753 17.5104L1.75311 10.5989C-0.584363 8.17471 -0.584378 4.27123 1.75311 1.84706C4.00454 -0.487863 7.60876 -0.608529 9.99999 1.48508Z"
        fill={color}
      />
    </Svg>
  );
}
