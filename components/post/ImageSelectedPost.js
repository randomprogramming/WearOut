import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { COLORS, API } from '../../global_state/constants';
import CustomButton from '../input/CustomButton';

const ImageSelectedPost = ({ selectedImage }) => {
  const csrf = useSelector(state => state.csrf);

  const handleUpload = () => {
    let formDataPayload = new FormData();
    const multiPartFile = {
      uri: selectedImage.uri,
      name: selectedImage.fileName,
      type: selectedImage.type,
    };
    formDataPayload.append('photo', multiPartFile);

    axios({
      url: API.createPost,
      method: 'POST',
      withCredentials: true,
      headers: {
        [csrf.headerName]: csrf.token,
        'Content-Type': 'multipart/form-data;boundary=--abc--',
      },
      data: formDataPayload,
    });
  };

  return (
    <View style={styles.main}>
      <Image
        source={{ uri: selectedImage.uri }}
        style={{ height: 100, width: 100 }}
      />
      <View>
        <CustomButton title="Upload" onPress={handleUpload} />
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
