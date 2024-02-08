import { Platform } from 'react-native';

const getIsWeb = () => ['web', 'windows', 'macos'].includes(Platform.OS);

export default getIsWeb;
