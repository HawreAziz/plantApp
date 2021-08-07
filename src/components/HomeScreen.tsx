import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    SafeAreaView,
    View,
    ViewStyle,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native'
import { ScreenProp } from '../../types';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './Search';
import Categories from '../components/Categories';
import plants from '../consts/plants';
import PlantCard from './PlantCard';


interface StyleProps {
    header: ViewStyle;
}

const HomeScreen: React.FunctionComponent<ScreenProp<'Home'>> = ({ navigation }) => {
    const [categoryIndex, setCategoryIndex] = React.useState(0);

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <StatusBar style='auto' />
            <View style={styles.header} >
                <View>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.green }}>Plant Shop</Text>
                </View>
                <Icon name='shopping-cart' size={30} />
            </View>
            <Search />
            <Categories
                categories={['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC']}
                categoryIndex={categoryIndex}
                select={index => setCategoryIndex(index)}
            />
            <FlatList
                numColumns={2}
                data={plants}
                contentContainerStyle={{
                    margin: 20,
                    paddingBottom: 20
                }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return <PlantCard plant={item} goToDetail={() => navigation.navigate('Detail', { plant: item })} />
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create<StyleProps>({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
        paddingTop: 10
    }
})

export default HomeScreen;
