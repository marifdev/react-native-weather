import { View, Text, Image } from 'react-native'
import React from 'react'
import { theme } from '../theme';
import { weatherImages } from '../constants';
import DegreeSymbol from './DegreeSymbol';

type DailyCardProps = {
  item: any,
  index: number,
  dayName: string
}
const DailyCard = ({ item, index, dayName }: DailyCardProps) => {
  return (
    <View
      key={index}
      className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
      style={{ backgroundColor: theme.bgWhite(0.15) }}
    >
      <Image
        source={weatherImages[item?.day?.condition?.text || 'other']}
        className="w-11 h-11" />
      <Text className="text-white">{dayName}</Text>
      <Text className="text-white text-xl font-semibold">
        {Math.round(item?.day?.maxtemp_c)}<DegreeSymbol />
      </Text>
      <Text className=" text-gray-400 text-xl font-semibold">
        {Math.round(item?.day?.mintemp_c)}<DegreeSymbol />
      </Text>
    </View>
  )
}

export default DailyCard