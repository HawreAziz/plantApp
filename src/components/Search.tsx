import React from 'react'
import {
    View,
    ViewStyle,
    StyleSheet,
    TextStyle,
    TextInput,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

interface SearchProps { }

interface StyleProps {
    container: ViewStyle;
    searchView: ViewStyle;
    sortView: ViewStyle;
    textInputStyle: TextStyle;
}

const Search: React.FunctionComponent<SearchProps> = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <Icon name='search' size={28} />
                <TextInput
                    placeholder='Search'
                    style={styles.textInputStyle}
                    value={text}
                    onChangeText={text => setText(text)}
                />

            </View>
            <View style={styles.sortView}>
                <Icon name='sort' size={34} color={COLORS.white} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.light,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    sortView: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.green,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle: {
        width: '70%',
        height: 60,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    }

});

export default Search;
