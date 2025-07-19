import Icon from '../components/atoms/icon';

interface TabIconProps {
    focused: boolean,
    size: number,
    color: string
}

export const HomeIcon: React.FC<TabIconProps> = ({ focused, size, color }) => (
    <Icon
        name={focused ? 'home' : 'home-outline'}
        size={size}
        color={color}
        iconFamily="Ionicons"
    />
);

export const CartIcon: React.FC<TabIconProps> = ({ focused, size, color
}) => {
    return (
    <Icon
    name={focused ? 'cart' :'cart-outline'}
    size={size}
    iconFamily='MaterialCommunityIcons'
    color={color}
    
    />
    

)
}
export const AccountIcon: React.FC<TabIconProps> = ({ focused, size, color
}) => {
    return (
    <Icon
    name={focused ? 'person' :'person-outline'}
    size={size}
    iconFamily='Ionicons'
    color={color}
    
    />
    

)
}
export const CategoryIcon: React.FC<TabIconProps> = ({ focused, size, color
}) => {
    return (
    <Icon
    name={focused ? 'grid' :'grid-outline'}
    size={size}
    iconFamily='Ionicons'
    color={color}
    
    />
    )
}
