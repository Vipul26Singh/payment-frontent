import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import {
    useFonts,
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';



const theme = {
    colors: {
        darkPurple: '#231d54',
        purple: '#8100ff',
        lightPurple: '#9388db',
        lightGrayPurple: '#fff',
        pink: '#ff3d69',
        gray: '#797777',
        primary: '#056348',
        light: '#fff'
    },
    images: {
        logo_sm: require('../../assets/images/logo-sm.png'),
        logo_lg: require('../../assets/images/logo-lg.png'),
    },
    sizes: ["0%", "1%", "2%", "5%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"],
    space: ["0%", "1%", "2%", "5%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"],
    fontSizes: ["15px", "22px", "30px"]

}



export const images = {
    logo_sm: require('../../assets/images/logo-sm.png'),
    logo_lg: require('../../assets/images/logo-lg.png'),
}

export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())



export default theme;