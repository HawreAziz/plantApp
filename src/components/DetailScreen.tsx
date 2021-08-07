import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    SafeAreaView,
    View,
    Image,
    Text,
    StyleSheet,
    ViewStyle,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScreenProp } from '../../types';
import Header from '../components/Header';
import COLORS from '../consts/colors';


interface StyleProps {
    container: ViewStyle;
    priceView: ViewStyle;
    checkoutView: ViewStyle;
    qntView: ViewStyle;
}

const DetailScreen: React.FunctionComponent<ScreenProp<'Detail'>> = ({ navigation, route }) => {
    const [quantity, setQuantity] = React.useState(1);
    const { plant } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar style='auto' />
            <Header goBack={() => navigation.goBack()} />
            <Image source={plant.img} style={{ resizeMode: 'contain', flex: 0.7, alignSelf: 'center', marginBottom: 20 }} />
            <View style={styles.container} >
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>__Best_choice</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
                    <View style={styles.priceView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>${plant.price}</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text style={{ marginTop: 10, fontSize: 15, color: 'grey', lineHeight: 22 }}>
                        {plant.about}
                    </Text>
                </View>
                <View style={styles.checkoutView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '50%', alignItems: 'center' }}>
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
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.green,
                            height: 50,
                            width: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                        }}
                        activeOpacity={0.8}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white }}>
                            Buy
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: COLORS.light,
        marginHorizontal: 8,
        paddingVertical: 30,
    },
    priceView: {
        width: 80,
        height: 40,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    checkoutView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingRight: 20,
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

export default DetailScreen;
