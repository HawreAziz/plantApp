import React from 'react'
import {
    ViewStyle,
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

interface QuantityProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}


interface StyleProps {
    qntView: ViewStyle;
    container: ViewStyle;
}

const Quantity: React.FunctionComponent<QuantityProps> = ({ quantity, setQuantity }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.qntView}
                activeOpacity={0.8}
                onPress={() => setQuantity(quantity > 0 ? quantity - 1 : quantity)}
            >
                <Icon name='remove' size={25} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{quantity}</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.qntView}
                onPress={() => setQuantity(quantity + 1)}
            >
                <Icon name='add' size={25} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%',
        alignItems: 'center'
    },
    qntView: {
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 10
    }
});

export default Quantity;
