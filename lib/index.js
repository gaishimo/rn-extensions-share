import { NativeModules } from "react-native";

export default {
  data: () => NativeModules.ReactNativeShareExtension.data(),
  close: () => NativeModules.ReactNativeShareExtension.close(),
  openURL: url => NativeModules.ReactNativeShareExtension.openURL(url),
  uploadFile: (uid, filePath) =>
    NativeModules.ReactNativeShareExtension.uploadFile(uid, filePath)
};
