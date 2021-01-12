import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

// from app
import { 
  COLOR, 
  CustomText, 
  FONT, 
  GetDurationString, 
  Icon_Detail_Right_Arrow_White, 
} from '../../constants';
import { IBooking } from '../../interfaces/app';


interface props {
  booking: IBooking;
  isCompleted: boolean;
}

export const ConfirmedBookingView: React.FC<props> = (props: props) => {

  const { navigate } = useNavigation();

  const booking: IBooking = props.booking;
  const isCompleted: boolean = props.isCompleted;

  return (
    <TouchableWithoutFeedback onPress={() => navigate('ConfirmedBookingDetail', { booking: booking, isCompleted: isCompleted }) }>
      <View style={styles.container}>
        {
          booking.show_date != null && booking.show_date == true
          ? <CustomText style={styles.date}>{booking.date}</CustomText>
          : null
        }
        <View style={{...styles.info_container, marginTop: (booking.show_date != null && booking.show_date == true) ? 16 : 22}}>
          <View style={{height: 40}}>
            <CustomText style={styles.name}>{booking.hour + ' / ' + booking.host?.fullname}</CustomText>
            <CustomText style={styles.experience}>{booking.experience + ' • ' + GetDurationString(booking.duration)}</CustomText>
          </View>
          
          <View style={styles.arrow}>
              <SvgXml width='100%' height='100%' xml={Icon_Detail_Right_Arrow_White} />
          </View>
        </View>

        <View style={styles.info_line} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
  },
  date: {
    marginTop: 33,
    height: 18,
    marginLeft: 1,
    lineHeight: 18,
    fontFamily: FONT.AN_Regular,
    fontSize: 12,
    color: COLOR.alphaWhiteColor75,
  },
  info_container: {
    marginLeft: 1,
    marginRight: 1,
    marginTop: 22,
    height: 40,
    flexDirection: 'row',
  },
  name: {
    height: 16,
    lineHeight: 16,
    fontFamily: FONT.AN_Regular,
    fontSize: 16,
    color: COLOR.systemWhiteColor,
  },
  experience: {
    marginTop: 8,
    height: 16,
    lineHeight: 16,
    fontFamily: FONT.AN_Regular,
    fontSize: 14,
    color: COLOR.alphaWhiteColor50,
  },
  arrow: {
    position: 'absolute',
    width: 5,
    height: 10,
    right: 0,
    top: 15,
  },
  info_line: {
    marginTop: 22,
    width: '100%',
    height: 1,
    borderRadius: 0.5,
    backgroundColor: COLOR.alphaWhiteColor20,
  },
});