import Toast, { ToastType } from 'react-native-toast-message';

export function showGlobalToast(
  type: ToastType,
  msg: string,
  subMsg: string,
): void {
  Toast.show({ type, text1: msg, text2: subMsg });
}
