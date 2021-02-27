/**
* Import Components from Native/Open NPM packages
*/
import { Alert, } from 'react-native';
import launchImageLibrary from 'react-native-image-picker';
import OpenSettings from 'react-native-open-settings';

/**
* Constant Strings used as default values for library methods.
*/
const commonTitle = 'Photo App';
const cameraMessage = 'Photo App needs access to your camera and storage so that you can capture and upload paystub.';
const storageMessage = 'Photo App needs access to your storage so that you can choose and upload paystub.';
const ok = 'OK';
const takePhoto = 'Take Photo';
const chooseExisting = 'Choose Existing';
const cancel = 'Cancel';
const settings = 'Settings';

/**
* Default options which will be used, in case no options provided explicitly by calling the method.
* In case of options parameter provided from calling the method, specific values would be replaced.
*/
const DEFAULT_OPTIONS = {
  title: null,
  takePhotoButtonTitle: takePhoto,
  chooseFromLibraryButtonTitle: chooseExisting,
  cancelButtonTitle: cancel,
  allowsEditing: true,
  quality: 1.0,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  permissionDenied: {
    title: commonTitle,
    text: cameraMessage,
    reTryTitle: settings,
    okTitle: ok,
    storageMessage
  },
};

/**
* In case of permission not given in iOS to access Photo Storage or Camera, this method will show message
* to go to Settings and grant the permission.
* +-+-+-+-+-+-+Parameter+-+-+-+-+-+-+
* title - Title of the Popup message.
* message - Description of the Popup message.
*
* Note - This method is not used for Android since the library already gives us permission to handle such behavior.
*/
function showPermissionDeniedMessage(title, message) {
  Alert.alert(
    title,
    message,
    [
      { text: settings, onPress: () => OpenSettings.openSettings() },
      { text: ok },
    ],
    { cancelable: false },
  );
}

/**
* This method process response that is returned from Native Camera/Gallery.
*
* +-+-+-+-+-+-+Parameter+-+-+-+-+-+-+
* response - response passed from calling the method to process result.
*
* +-+-+-+-+-+-+Response Parameters+-+-+-+-+-+-+
* didCancel - User canceled the operation.
* error - Either permission is not given or system error.
* else - Success, proceed with using the response.
*
* Note - We do not get error object to check which permission rejected/option selected, so we manually check with the message, if that contains
* 'Photo library' or 'Camera' text.
*/
function processResponse(response, options) {
  console.log(response);
  if (response.didCancel) {
    // Do nothing
    return null;
  } else if (response.error) {
    if (response.error.indexOf('Photo library') > -1) {
      showPermissionDeniedMessage(
        options.permissionDenied.title,
        options.permissionDenied.storageMessage,
      );
    } else if (response.error.indexOf('Camera') > -1) {
      showPermissionDeniedMessage(
        options.permissionDenied.title,
        options.permissionDenied.text,
      );
    } else {
      // Do nothing.
    }
    return null;
  }
  // Return the response URI to perform further operation.
  // const source = { uri: response.uri };
  // return source;
  return response;
}

/**
* This is the main method of the whole library, which performs operation either from
* Native Camera or Gallery and gives callback based on response returned from
* operation, either success, didCancel or error.
*
* +-+-+-+-+-+-+Parameter+-+-+-+-+-+-+
* options - Options for callee method to Override the values of #DEFAULT_OPTIONS
*
* +-+-+-+-+-+-+Response Parameters+-+-+-+-+-+-+
* resolve - response based on operation (explained above).
*/
export function showImagePicker(options = null) {
  return new Promise((resolve, reject) => {
    launchImageLibrary.showImagePicker({ ...DEFAULT_OPTIONS, ...options }, (response) => {
      const result = processResponse(response, options);
      if (result !== null) {
        resolve(result);
      } else {
        reject(result);
      }
    });
  });
}

export default { showImagePicker };