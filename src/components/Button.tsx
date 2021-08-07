import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import COLORS from '../consts/colors';

interface ButtonProps {

}

const Button: React.FunctionComponent<ButtonProps> = () => {
    return (
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
    )
}

export default Button;
