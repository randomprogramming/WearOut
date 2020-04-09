import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { COLORS, API, FONTS } from '../../global_state/constants';
import CustomButton from '../input/CustomButton';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const ImageSelectedPost = ({ selectedImage }) => {
  const [descriptionInputText, setdescriptionInputText] = useState('');
  const csrf = useSelector(state => state.csrf);

  const handleUpload = () => {
    //create a form data which will be sent to the server
    let formDataPayload = new FormData();
    const multiPartFile = {
      uri: selectedImage.uri,
      name: selectedImage.fileName,
      type: selectedImage.type,
    };
    formDataPayload.append('photo', multiPartFile);
    formDataPayload.append('description', descriptionInputText);

    axios({
      url: API.createPost,
      method: 'POST',
      withCredentials: true,
      headers: {
        [csrf.headerName]: csrf.token,
        //boundary is required for multipart files
        'Content-Type': 'multipart/form-data;boundary=--abc--',
      },
      data: formDataPayload,
    });
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
        </View>
        <View>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="Description..."
            style={styles.descriptionInput}
            value={descriptionInputText}
            onChangeText={newText => setdescriptionInputText(newText)}
          />
        </View>
        <View>
          <CustomButton title="Upload" onPress={handleUpload} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND,
  },
  imageContainer: {
    borderBottomColor: COLORS.ACCENT_COLOR,
    borderBottomWidth: 3,
  },
  image: {
    // TODO: Change the dimensions of this image in case the image size is smaller than device width or height
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  descriptionInput: {
    backgroundColor: COLORS.BACKGROUND_DARKER,
    fontFamily: FONTS.REGULAR,
    margin: 15,
    borderRadius: 7,
    color: COLORS.TEXT_COLOR,
  },
});

export default ImageSelectedPost;
