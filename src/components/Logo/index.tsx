import React, { Fragment } from 'react'
import { View, Text } from 'react-native'

import SVG_LOGO from "../../assets/svg/logo.svg"
import SVG_LOGO_CONTAINER from "../../assets/svg/logo-container.svg"

import { ILogo } from './type'
import pkg from '../../../package.json'

export default function Logo(props: ILogo) {
  const {showTitle = false, showLogo = true, showContainer = false, size = "m"} = props

  const content = (
    <Fragment>
      {showLogo && <SVG_LOGO />}
      {showTitle && <Text>{pkg.title}</Text>}
    </Fragment>
  )

  return (
    <View>
      {!showContainer ? content : (
        <View>
          <SVG_LOGO_CONTAINER />
          {showTitle && <Text>{pkg.title}</Text>}
        </View>
      )}
    </View>
  )
}
