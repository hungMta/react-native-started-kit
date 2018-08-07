import React from 'react'
import {} from 'react-native'
import FontIcon from "react-native-vector-icons/FontAwesome";
import { AppColors } from "../../theme/index"

const TabIcon = ({ focused, title }) => {
    switch (title) {
        case 'home':
            return (
                <FontIcon name='home' size={30} color={focused ? AppColors.primaryDark : AppColors.primaryColor} />
            )
        case 'search':
            return (
                <FontIcon name="search" size={25} color={focused ? AppColors.primaryDark : AppColors.primaryColor} />
            )
        case 'upload':
            return (
                <FontIcon name="plus-circle" size={30} color={focused ? AppColors.primaryDark : AppColors.primaryColor} />
            )
        case 'favourite':
            return (
                <FontIcon name="heart" size={25} color={focused ? AppColors.primaryDark : AppColors.primaryColor} />
            )
        case 'profile':
            return (
                <FontIcon name="user" size={25} color={focused ? AppColors.primaryDark : AppColors.primaryColor} />
            )
    }
}

export default props => TabIcon({...props});