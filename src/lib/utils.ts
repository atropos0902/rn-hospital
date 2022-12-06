import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812 + (StatusBar.currentHeight as number);

const widthScale = (size: number) => (width / guidelineBaseWidth) * size;
const heightScale = (size: number) => (height / guidelineBaseHeight) * size;
const normalizeScale = (size: number) =>
  Math.ceil(size * Math.min(width / guidelineBaseWidth, height / guidelineBaseHeight));

export { widthScale as w, heightScale as h, normalizeScale as m };
