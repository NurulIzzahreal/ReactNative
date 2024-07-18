import { Dimensions, ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { Saldo } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constant'

const Beranda = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>Nurul Izzah</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconLayanan}>
          <ButtonIcon title="Pesawat" type="layanan"/>
          <ButtonIcon title="Hotel" type="layanan"/>
          <ButtonIcon title="Holiday" type="layanan"/>
          <ButtonIcon title="Villa" type="layanan"/>
          <ButtonIcon title="Bus" type="layanan"/>
          <ButtonIcon title="Kereta" type="layanan"/>
        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.label}>Pesanan Aktif</Text>
        <PesananAktif title="Pesan Tiket Pesawat ke Hongkong" status="Sudah Cek-In"/>
        <PesananAktif title="Pesan Kamar Hotel" status="Belum Cek-In"/>
        <PesananAktif title="Pesan Villa di Bali" status="Sudah Cek-In"/>
        <PesananAktif title="Pesan Tiket Kereta" status="Sudah Cek-In"/>
      </View>
      </ScrollView>
    </View>
  )
}

export default Beranda

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth*0.25,
    height: windowHeight*0.06
  },
  hello: {
    marginTop: windowHeight*0.030
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Reguler'
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})