import React from 'react'
import { View, ViewStyle, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'

interface CategoriesProps {
    categories: string[];
    select: (index: number) => void;
    categoryIndex: number;
}

interface StyleProps {
    container: ViewStyle;
}

const Categories: React.FunctionComponent<CategoriesProps> = ({ categories, select, categoryIndex }) => {
    return (
        <View style={styles.container}>
            {categories.map((category, index) => {
                const color = index === categoryIndex ? COLORS.green : 'grey'
                return (
                    <TouchableOpacity
                        onPress={() => select(index)}
                        key={index}
                        activeOpacity={0.8}
                    >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color }}>{category}</Text>
                        {categoryIndex === index && <View style={{ height: 3, width: '100%', backgroundColor: color }} />}
                    </TouchableOpacity>
                );

            })}
        </View>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30
    },
})

export default Categories;
