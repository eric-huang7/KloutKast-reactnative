import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

// from app
import { COLOR, CustomText, FONT } from '../../constants';
import { ICardInfo } from '../../interfaces/app';

interface props {
  card: ICardInfo;
  onSelectCard: (card: ICardInfo) => void;
}

export const YourCardButton: React.FC<props> = (props: props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onSelectCard(props.card)}>
      <View style={styles.container}>
        <CustomText style={styles.card_number}>{`${props.card.cardBrand} ${props.card.last4digits}`}</CustomText>
        <View style={styles.info_line} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
  },
  card_number: {
    marginTop: 22,
    width: '100%',
    height: 16,
    // fontWeight: '500',
    lineHeight: 16,
    fontFamily: FONT.AN_Regular,
    fontSize: 16,
    color: COLOR.systemWhiteColor,
  },
  info_line: {
    marginTop: 21,
    width: '100%',
    height: 1,
    borderRadius: 0.5,
    backgroundColor: COLOR.alphaWhiteColor20,
  },
});
