import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {PropsWithChildren} from 'react';
{
  /*how you declare the type of the variable */
}

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

{
  /* we're going to call
  this one as a dice props so whenever I'm
  going to create a component dice the
  properties which I'm going to pass
  inside the dice is this dice props*/
}
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>({
    dice1: DiceOne,
    dice2: DiceOne,
  });
  // const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let dice;
    switch (randomNumber) {
      case 1:
        dice = DiceOne;
        break;
      case 2:
        dice = DiceTwo;
        break;
      case 3:
        dice = DiceThree;
        break;
      case 4:
        dice = DiceFour;
        break;
      case 5:
        dice = DiceFive;
        break;
      case 6:
        dice = DiceSix;
        break;

      default:
        dice = DiceOne;
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
    return dice;
  };

  const changeDice = () => {
    setDiceImage({
      dice1: rollDiceOnTap(),
      dice2: rollDiceOnTap(),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTxt}>Double Dice Roll</Text>
      </View>
      <View>
        <Dice imageUrl={diceImage.dice1} />
        {/* <Pressable onPress={changeDice}>
            <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
          </Pressable> */}
      </View>
      <View>
        <Dice imageUrl={diceImage.dice2} />
        <Pressable onPress={changeDice}>
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerTxt}>Scroll Left for More 👉</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // width: '100%',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  heading: {
    height: 50,
  },
  headingTxt: {
    color: '#000',
    fontSize: 24,
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footer: {marginTop: 50, marginLeft: 30},
  footerTxt: {color: '#000', fontSize: 15},
});
