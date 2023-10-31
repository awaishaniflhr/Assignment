import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {txt, white} from './src/utilis/colors';

const App = () => {
  const [modalInfo, setModalInfo] = useState(false);
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
        <TouchableOpacity style={styles.checkInBtn}>
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
        <View style={styles.centeredViewTranslator}>
          <View
            style={[
              styles.modalViewTranslator,

            ]}>
            
              <Text
                style={[
                  styles.categoryTxtTranslator,
                  {
                    color: 'gray',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                    marginLeft: 10,
                    alignSelf: 'flex-start',
                  },
                ]}
                onPress={() => groupInfo()}>
                Group Info
              </Text>
            
              <Text
                style={[
                  styles.categoryTxtTranslator,
                  {
                    color: 'gray',
                    fontSize: 16,
                    fontFamily: 'Inter-Medium',
                  },
                ]}
                onPress={() => handleInfo()}>
                Contact Info
              </Text>
            
            <View style={styles.seprator}></View>
            
              <Text
                style={[
                  styles.categoryTxtTranslator,
                  {
                    color: '#E00000',
                    fontSize: 16,
                    fontFamily: 'Inter-SemiBold',
                    marginLeft: 10,
                    alignSelf: 'flex-start',
                  },
                ]}
                onPress={() => handleDelete()}>
                Delete Group
              </Text>

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
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
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
  centeredViewTranslator: {
    flex: 1,
    position: 'absolute',
    right: 50,
  },
  modalViewTranslator: {
    width: 126,
    height: 102,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'rgba(217, 217, 217, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTxtTranslator: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#313131',
    marginTop: 5,
    textAlign: 'center',
  },
});
