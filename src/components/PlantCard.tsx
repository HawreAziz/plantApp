import React from 'react'
import {
    View,
    ViewStyle,
    StyleSheet,
    Dimensions,
    Text,
    ImageSourcePropType,
    Image,
    ImageStyle,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { PlantProps } from '../../types';

interface PlantCardProps {
    plant: PlantProps,
    goToDetail: () => void;
}

interface StyleProps {
    container: ViewStyle;
    iconView: ViewStyle;
    imageView: ViewStyle;
    imageStyle: ImageStyle,
    addView: ViewStyle,
}


const { width } = Dimensions.get('screen');
console.log(width);
const cardWidth = width / 2 - 30;

const PlantCard: React.FunctionComponent<PlantCardProps> = ({ plant, goToDetail }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={goToDetail}
            activeOpacity={0.8}
        >
            <View style={{ ...styles.iconView, backgroundColor: plant.like ? 'rgba(245, 42, 42,0.2)' : 'rgba(0,0,0,0.2) ' }}>
                <Icon name='favorite' size={20} color={plant.like ? COLORS.red : COLORS.dark} />
            </View>
            <View style={styles.imageView}>
                <Image source={plant.img} style={styles.imageStyle} />
            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{plant.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${plant.price}</Text>
                    <View style={styles.addView}>
                        <Icon name='add' size={22} color={COLORS.white} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        width: cardWidth,
        height: 225,
        marginRight: 20,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
    },
    iconView: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'contain'
    },
    addView: {
        height: 30,
        width: 30,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})

export default PlantCard;
