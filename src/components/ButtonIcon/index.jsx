import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetKoin, IconPesawat, IconHotel, IconHoliday, IconVilla, IconBus, IconKereta } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title, type}) => {

  const Icon = () => {
    if(title === 'Add Saldo') return <IconAddSaldo />

    if(title === 'Get Koin') return <IconGetKoin />

    if(title === 'Pesawat') return <IconPesawat />

    if(title === 'Hotel') return <IconHotel />

    if(title === 'Holiday') return <IconHoliday />

    if(title === 'Villa') return <IconVilla />

    if(title === 'Bus') return <IconBus />

    if(title === 'Kereta') return <IconKereta />

    return <IconAddSaldo />
  }

  return (
   <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
      <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
   </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
      marginBottom: 12,
      marginRight: type === "layanan" ? 30 : 0
    }),
    button: (type) => ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10,
    }),
    text: (type) => ({
        fontSize: type === 'layanan' ? 14 : 10,
        fontFamily: type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
        textAlign: 'center'
    })
})