import { ImageSourcePropType } from 'react-native';

export const BASE_URL = 'https://www.communitybenefitinsight.org/api/get_hospitals.php?state=TX';

export const imageMap: { [key: string]: ImageSourcePropType } = {
  image1: require('../assets/png/image1.png'),
  image2: require('../assets/png/image2.png'),
  image3: require('../assets/png/image3.png'),
};
