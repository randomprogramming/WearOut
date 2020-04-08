import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { COLORS } from '../global_state/constants';
import CustomButton from '../components/input/CustomButton';
import ImageSelectedPost from '../components/post/ImageSelectedPost';

const CreatePost = () => {
  const [selectedImage, setselectedImage] = useState(null);
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    mediaType: 'photo',
  };

  const showImageSelector = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setselectedImage(response);
      }
    });
  };

  return (
    <View style={styles.main}>
      {selectedImage ? (
        <ImageSelectedPost selectedImage={selectedImage} />
      ) : (
        <View style={styles.center}>
          <CustomButton title="Select Image" onPress={showImageSelector} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CreatePost;
