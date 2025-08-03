import { View, Text, NativeSyntheticEvent, NativeScrollEvent, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { dynamicDashboardData as fullData } from '../../../utils/db'

const MainList = () => {
    // References and state variables
    const prevscrollY = useRef(0);
    const flatListRef = useRef<FlatList<any>>(null);
    const page_size = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(fullData.slice(0, page_size));
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    // Render different section types
    // Custom carousel component with auto-sliding functionality
const AutoCarousel = ({ data, title }: { data: any[], title: string }) => {
    const flatListRef = useRef<FlatList<any>>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;
    
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    
    // Auto scroll effect
    useEffect(() => {
        const timer = setInterval(() => {
            if (data.length > 0) {
                const nextIndex = (currentIndex + 1) % data.length;
                flatListRef.current?.scrollToIndex({
                    index: nextIndex,
                    animated: true
                });
            }
        }, 3000); // Change slide every 3 seconds
        
        return () => clearInterval(timer);
    }, [currentIndex, data]);
    
    // Pagination dots
    const Pagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {data.map((_, index) => {
                    const inputRange = [
                        (index - 1) * Dimensions.get('window').width * 0.8,
                        index * Dimensions.get('window').width * 0.8,
                        (index + 1) * Dimensions.get('window').width * 0.8
                    ];
                    
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [8, 16, 8],
                        extrapolate: 'clamp'
                    });
                    
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });
                    
                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#ccc', '#e91e63', '#ccc'],
                        extrapolate: 'clamp'
                    });
                    
                    return (
                        <Animated.View 
                            key={index} 
                            style={[styles.dot, { width: dotWidth, opacity, backgroundColor }]}
                        />
                    );
                })}
            </View>
        );
    };
    
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title || 'Ad Carousel'}</Text>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.adItem}>
                            <Image 
                                source={item.image_uri || { uri: item.imageUri || 'https://via.placeholder.com/300x150' }} 
                                style={styles.adImage} 
                                resizeMode="cover"
                            />
                            {item.title && (
                                <View style={styles.adTitleContainer}>
                                    <Text style={styles.adTitle}>{item.title}</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    )}
                />
                <Pagination />
            </View>
        </View>
    );
};

const sectionComponent = (section: any) => {
        switch(section.type){
            case 'ad_carousal':
                return <AutoCarousel data={section.data} title={section.title || 'Ad Carousel'} />;
            case 'categories':
                return(
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title || 'Categories'}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.categoryItem}>
                                    <Image 
                                        source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/60x60'}} 
                                        style={styles.categoryImage} 
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.categoryText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                );
            case 'sponser':
                return(
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title || 'Sponspership'}</Text>
                        {section.data.map((item: any) => (
                            <TouchableOpacity key={item.id} style={styles.sponsorItem}>
                                <Image 
                                    source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/400x120'}} 
                                    style={styles.sponsorImage} 
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            case 'horizontal_list':
                return(
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.horizontalItem}>
                                    <Image 
                                        source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/150x200'}} 
                                        style={styles.horizontalImage} 
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                );
            case 'vertical_list':
                return(
                    <View style={[styles.sectionContainer, {backgroundColor: section.bgColor || '#fff'}]}>
                        <Text style={[styles.sectionTitle, {color: section.btnColor || '#000'}]}>{section.title}</Text>
                        {section.data.map((item: any) => (
                            <TouchableOpacity key={item.id} style={styles.verticalItem}>
                                <View style={styles.verticalItemContent}>
                                    <View style={styles.verticalTextContainer}>
                                        <Text style={styles.verticalTitle}>{item.title || item.name}</Text>
                                        <Text style={styles.verticalSubtitle}>{item.subTitle || item.description || 'No description'}</Text>
                                    </View>
                                    <Image 
                                        source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/80x80'}} 
                                        style={styles.verticalImage} 
                                        resizeMode="cover"
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            case 'grid_list':
                return(
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            numColumns={2}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.gridItem}>
                                    <Image 
                                        source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/150x120'}} 
                                        style={styles.gridImage} 
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.gridName}>{item.name}</Text>
                                    <Text style={styles.gridPrice}>₹{item.price || '999'}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.rating}>{item.rating || '4.5'} ★</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                );
            case 'animated_horizontal_list':
                // Custom animated item component
                const AnimatedItem = ({ item }: { item: any }) => {
                    const scaleAnim = useRef(new Animated.Value(0.95)).current;
                    
                    useEffect(() => {
                        Animated.spring(scaleAnim, {
                            toValue: 1,
                            friction: 5,
                            tension: 40,
                            useNativeDriver: true
                        }).start();
                    }, []);
                    
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPressIn={() => {
                                Animated.spring(scaleAnim, {
                                    toValue: 0.95,
                                    friction: 5,
                                    tension: 40,
                                    useNativeDriver: true
                                }).start();
                            }}
                            onPressOut={() => {
                                Animated.spring(scaleAnim, {
                                    toValue: 1,
                                    friction: 5,
                                    tension: 40,
                                    useNativeDriver: true
                                }).start();
                            }}
                        >
                            <Animated.View style={[styles.animatedItem, { transform: [{ scale: scaleAnim }] }]}>
                                <Image 
                                    source={{uri: item.image_uri || item.imageUri || 'https://via.placeholder.com/120x180'}} 
                                    style={styles.animatedImage} 
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </TouchableOpacity>
                    );
                };
                
                return(
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => <AnimatedItem item={item} />}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                );
            default:
                return null;
        }
    }

    // Handle scroll events
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollY = event?.nativeEvent.contentOffset.y;
        prevscrollY.current = currentScrollY;
    }
    
    // Handle pull-to-refresh
    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setCurrentPage(1);
            setData(fullData.slice(0, page_size));
            setIsRefreshing(false);
        }, 2000);
    }
    
    // Handle loading more items when reaching end of list
    const handleLoadMore = () => {
        if (isLoadingMore) return;
        if (data?.length >= fullData?.length) return;
        
        setIsLoadingMore(true);
        setTimeout(() => {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            setData(fullData.slice(0, nextPage * page_size));
            setIsLoadingMore(false);
        }, 2000);
    }
    
    // Render item based on its type
    const renderItem = ({item}: {item: any}) => {
        return (
            <View style={{ marginBottom: 15 }}>
                {sectionComponent(item)}
            </View>
        );
    }

  return (
    <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
    />  
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 10,
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        paddingHorizontal: 5,
    },
    // Ad Carousel Styles
    adItem: {
        width: Dimensions.get('window').width * 0.8,
        height: 180,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    adImage: {
        width: '100%',
        height: '100%',
    },
    adTitleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
    },
    adTitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 10,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    
    // Categories Styles
    categoryItem: {
        width: 85,
        height: 110,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    categoryImage: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    categoryText: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        color: '#333',
    },
    
    // Sponsor Styles
    sponsorItem: {
        width: '100%',
        height: 130,
        backgroundColor: '#f5f5f5',
        marginBottom: 15,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    sponsorImage: {
        width: '100%',
        height: '100%',
    },
    
    // Horizontal List Styles
    horizontalItem: {
        width: 160,
        height: 220,
        backgroundColor: '#f8f8f8',
        marginRight: 15,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    horizontalImage: {
        width: '100%',
        height: '100%',
    },
    
    // Vertical List Styles
    verticalItem: {
        width: '100%',
        height: 110,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 12,
        borderRadius: 12,
        padding: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    verticalItemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    verticalTextContainer: {
        flex: 1,
        paddingRight: 15,
    },
    verticalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    verticalSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    verticalImage: {
        width: 85,
        height: 85,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    
    // Grid List Styles
    gridItem: {
        width: Dimensions.get('window').width * 0.44,
        height: 240,
        backgroundColor: '#fff',
        margin: 6,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
        borderWidth: 0.5,
        borderColor: '#f0f0f0',
    },
    gridImage: {
        width: '100%',
        height: 130,
        borderRadius: 8,
        marginBottom: 10,
    },
    gridName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
        textAlign: 'center',
        height: 40,
    },
    gridPrice: {
        fontSize: 16,
        color: '#e91e63',
        fontWeight: 'bold',
        marginBottom: 6,
    },
    ratingContainer: {
        backgroundColor: '#388e3c',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    
    // Animated Horizontal List Styles
    animatedItem: {
        width: 130,
        height: 190,
        backgroundColor: '#f8f8f8',
        marginRight: 15,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    animatedImage: {
        width: '100%',
        height: '100%',
    },
});

export default MainList