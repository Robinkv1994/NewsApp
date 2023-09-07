import {Dimensions, PixelRatio} from 'react-native';

 const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;


export {
  
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
 
};
