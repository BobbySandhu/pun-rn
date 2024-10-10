import { Share } from 'react-native';
import Toast from 'react-native-toast-message';

const onShare = async (text: string) => {
  try {
    const result = await Share.share({
      message: text,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log(result.activityType);
      } else {
        console.log('shared');
      }

      Toast.show({
        type: 'success',
        text1: 'Shared 👍',
        position: 'bottom',
      });
    } else if (result.action === Share.dismissedAction) {
      console.log('dismiss');
    }
  } catch (error: any) {
    Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        position: 'bottom',
      });
  }
};

export default onShare;
