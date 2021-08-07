import { NavigationProp, RouteProp } from "@react-navigation/native"
import { ImageSourcePropType } from "react-native"


export interface PlantProps {
    plant: {
        id: number;
        name: string;
        price: string;
        like: boolean;
        img: ImageSourcePropType;
        about: string;
    }
}


export type NavigationParamList = {
    Home: undefined;
    Detail: PlantProps;
}


export type ScreenProp<T extends keyof NavigationParamList> = {
    navigation: NavigationProp<NavigationParamList, T>;
    route: RouteProp<NavigationParamList, T>;
}