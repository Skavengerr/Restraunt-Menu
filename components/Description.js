import React, {useState} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {Icon} from 'native-base'
const image =
    'https://thumbs.dreamstime.com/b/tacos-hot-tasty-logo-vector-vintage-mexican-food-truck-icon-retro-hand-drawn-hipster-street-snack-car-illustration-91096137.jpg'

export default function Description() {
    return (
        <View style={styles.content}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>مستر تاكو</Text>
                <Text style={styles.description}>
                    متخصصون في التاكو على الطریقة الاسبنایة، تفضلو حیاكم االله شیكو على
                </Text>
                <View style={{flexDirection: 'row-reverse'}}>
                    <Icon style={styles.icon} name='navigate' />
                    <Text style={styles.map}>حطين</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    imageView: {
        flex: 1,
        alignItems: 'flex-end',
        textAlignVertical: 'center',
        marginTop: 25,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 18,
    },
    container: {
        flex: 2,
        backgroundColor: '#F6FAFF',
        paddingRight: 10,
        paddingLeft: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'right',
        alignSelf: 'flex-end',
        margin: 10,
    },
    map: {
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'right',
        alignSelf: 'flex-end',
        color: '#838890',
        marginTop: 25,
        marginRight: 10,
    },
    icon: {
        fontSize: 20,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: 25,
        marginRight: 10,
        color: '#62A9Ce',
    },
    description: {
        fontSize: 16,
        textAlign: 'right',
        alignSelf: 'center',
        color: '#838890',
    },
})
