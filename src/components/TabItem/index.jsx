import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconAkunOn, IconHome, IconHomeOn, IconPesan, IconPesanOn } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === "Beranda") return isFocused ? <IconHomeOn/> : <IconHome/>

    if(label === "Pesan") return isFocused ? <IconPesanOn/> : <IconPesan/>

    if(label === "Akun") return isFocused ? <IconAkunOn/> : <IconAkun/>

    return <IconHome/>
  }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <Icon />
        <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 8
  })
})