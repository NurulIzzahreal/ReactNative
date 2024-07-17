import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetKoin } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title}) => {

  const Icon = () => {
    if(title === "Add Saldo") return <IconAddSaldo />

    if(title === "Get Koin") return <IconGetKoin />

    return <IconAddSaldo />
  }

  return (
   <TouchableOpacity>
      <View style={styles.button}>
      <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
   </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: {
        backgroundColor: WARNA_SEKUNDER,
        padding: 7,
        borderRadius: 10,
    },
    text: {
        fontSize: 10,
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center'
    }
})