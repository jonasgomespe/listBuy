import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

interface ListProductIconProps {
    icon: any
    size?:number
    color?: string
}

export const ListProductIcon = ({icon, size, color = '#292D32'}: ListProductIconProps) => {
    const sizeIcon  = size || 25;
    const colorIcon = color;

    return (
        <Feather name={icon} size={sizeIcon} color={colorIcon} />
    )
}