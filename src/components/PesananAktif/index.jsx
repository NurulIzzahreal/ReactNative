import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React from 'react'
import { WARNA_ABU_ABU, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant';

const PesananAktif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesanan />
      <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight*0.02,
    alignItems: 'center',
    },
  text: {
    marginLeft: windowWidth*0.02,
    },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'Sudah Cek-In' ? WARNA_UTAMA : status === 'Belum Cek-In' ? WARNA_WARNING : WARNA_ABU_ABU,
  })   
})