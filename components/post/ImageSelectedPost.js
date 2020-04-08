import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../global_state/constants';
import CustomButton from '../input/CustomButton';

const ImageSelectedPost = ({ selectedImage }) => {
  return (
    <View style={styles.main}>
      <Image
        source={{ uri: selectedImage.uri }}
        style={{ height: 100, width: 100 }}
      />
      <View>
        <CustomButton title="Upload" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
});

export default ImageSelectedPost;
