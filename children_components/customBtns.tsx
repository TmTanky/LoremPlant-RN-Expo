import React, { FC } from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const customBtn: FC = (props) => {

    return <HeaderButton IconComponent={MaterialCommunityIcons} iconSize={23} title="custom-btn" {...props} />

}