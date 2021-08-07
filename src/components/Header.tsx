import React from 'react'
import { View, Text, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
    goBack: VoidFunction;
}

interface StyleProps {
    container: ViewStyle;
}

const Header: React.FC<Props> = ({ goBack }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={goBack}
                activeOpacity={0.8}
            >

                <Icon name="arrow-back" size={28} />
            </TouchableOpacity>
            <Icon name="shopping-cart" size={28} />
        </View>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
    }
})

export default Header;
