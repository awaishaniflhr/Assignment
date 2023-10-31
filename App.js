import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {black, txt, white} from './src/utilis/colors';
import {launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [modalInfo, setModalInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    'https://assets.nationbuilder.com/unitela/pages/5683/attachments/original/1670289567/default-headshot.png?1670289567',
  );

  const OpenGallery = () => {
    console.log('gallery opened');
    let options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
        cameraType: 'front',
      },
    };
    launchImageLibrary(options, response => {
      setSelectedImage(response.assets[0].uri);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchSec}>
        <Image
          resizeMode="contain"
          style={{width: 30, height: 30, alignSelf: 'center'}}
          source={require('../Assignment/src/assets/logo.png')}
        />
        <TextInput style={styles.inputfield} />
        <View style={styles.rightSearchSec}>
          <Image
            resizeMode="contain"
            style={{width: 30, height: 30}}
            source={require('../Assignment/src/assets/profile.png')}
          />
          <Image
            resizeMode="contain"
            style={{width: 8, height: 7}}
            source={require('../Assignment/src/assets/down.png')}
          />
        </View>
      </View>
      <ImageBackground
        resizeMode="contain"
        source={require('../Assignment/src/assets/banner1.png')}
        style={styles.addCheckinSec}>
        <Image
          resizeMode="contain"
          style={styles.title}
          source={require('../Assignment/src/assets/text.png')}
        />
        <Text style={styles.normalTxt}>
          Lorem ipsus dolor sit amen, something important to say here
        </Text>
        <TouchableOpacity
          onPress={() => setModalInfo(true)}
          style={styles.checkInBtn}>
          <Text style={styles.checkInTxt}>Add Check In</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.checkinTitle}>Added CheckIns</Text>
      {/* Modal Start */}

      <Modal
        transparent={true}
        visible={modalInfo}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalInfo(!modalInfo);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <View style={styles.modalTitleSec}>
              <Text style={{fontSize: 16, color: 'black'}}>Add Check In </Text>
              <TouchableOpacity onPress={() => setModalInfo(false)}>
                <Image
                  resizeMode="contain"
                  style={{width: 16, height: 16}}
                  source={require('../Assignment/src/assets/close.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputTitleSec}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginBottom: 20,
                  fontWeight: '500',
                }}>
                Title{' '}
              </Text>
              <TextInput
                placeholderTextColor={'#B4B4B4'}
                placeholder="Enter title"
                style={{
                  width: '100%',
                  height: 45,
                  borderColor: '#D9D9D9',
                  borderWidth: 1,
                  borderRadius: 6,
                  paddingHorizontal: 10,
                  color: 'black',
                }}
              />
            </View>
            <View style={styles.uploadImgSec}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginBottom: 20,
                  fontWeight: '500',
                }}>
                Upload Image
              </Text>

              <TouchableOpacity
              onPress={() => OpenGallery()}
                style={{
                  width: '100%',
                  height: 221,
                  borderColor: '#D9D9D9',
                  borderWidth: 2.5,
                  borderRadius: 6,
                  borderStyle: 'dashed',
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 36,
                    height: 36,
                    alignSelf: 'center',
                    marginBottom: 20,
                  }}
                  source={require('../Assignment/src/assets/uploadImg.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    marginBottom: 5,
                    fontWeight: '400',
                    textAlign: 'center',
                    width: '85%',
                    alignSelf: 'center',
                  }}>
                  Click or drag file to this area to upload
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    marginBottom: 20,
                    fontWeight: '400',
                    textAlign: 'center',
                    width: '85%',
                    alignSelf: 'center',
                    lineHeight: 20,
                  }}>
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                borderWidth: 0.6,
                borderColor: '#D9D9D9',
                marginVertical: 25,
              }}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
                paddingRight: 20,
              }}>
              <TouchableOpacity
              onPress={()=>setModalInfo(false)}
                style={{
                  width: 75,
                  height: 32,
                  borderWidth: 1,
                  marginRight: 20,
                  borderColor: '#D9D9D9',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: black, fontSize: 14, fontWeight: '400'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>setModalInfo(false)}
                style={{
                  width: 60,
                  height: 32,
                  borderWidth: 1,
                  backgroundColor: '#7B5AFF',
                  borderColor: '#D9D9D9',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: white, fontSize: 14, fontWeight: '400'}}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Ends */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchSec: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: white,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    elevation: 3,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.15,
    shadowRadius: 2,
  },
  rightSearchSec: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 45,
  },
  inputfield: {
    paddingLeft: 10,
    width: '70%',
    color: txt,
  },
  title: {
    width: 230,
    height: 35,
    alignSelf: 'center',
  },
  addCheckinSec: {
    width: 334,
    height: 318,
    alignSelf: 'center',
    marginTop: 25,
    justifyContent: 'center',
    elevation: 3,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.15,
    shadowRadius: 2,
  },
  modalTitleSec: {
    width: '100%',
    height: 72,
    backgroundColor: '#F8F8F8',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  normalTxt: {
    fontSize: 16,
    color: white,
    textAlign: 'center',
    marginTop: 20,
    width: 270,
    alignSelf: 'center',
  },
  checkInBtn: {
    width: 112,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#7B5AFF',
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  checkInTxt: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  checkinTitle: {
    fontSize: 24,
    color: txt,
    fontWeight: '500',
    marginLeft: 20,
    marginVertical: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  inputTitleSec: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  uploadImgSec: {
    width: '90%',
    alignSelf: 'center',
  },

  modalView: {
    width: '90%',
    height: 610,
    borderRadius: 22,
    backgroundColor: white,
    borderWidth: 2,
    borderColor: 'rgba(217, 217, 217, 0.2)',
    alignSelf: 'center',
  },
  categoryTxtTranslator: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#313131',
    marginTop: 5,
    textAlign: 'center',
  },
});
