import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Footer, FooterTab, Button, Text} from 'native-base'

export default function FooterButton() {
    return (
        <Footer style={styles.bgFooter}>
            <FooterTab style={styles.footer}>
                <View style={styles.flex}>
                    <Button style={styles.button} info>
                        <Text style={styles.buttonText}>قبول</Text>
                    </Button>
                </View>
                <View style={styles.right}>
                    <Text note style={styles.note}>
                        شامل الضرائب
                    </Text>
                    <Text style={styles.sum}>1200.00</Text>
                </View>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    flex: {
        flex: 1,
        alignSelf: 'center',
        borderRightColor: 'gray',
        borderRightWidth: 0.2
    },
    bgFooter: {
        backgroundColor: '#F6FAFF',
    },
    note: {
        fontSize: 15,
        paddingRight: 15,
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    sum: {
        fontSize: 26,
        fontWeight: '600',
    },
    right: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
    },
    button: {
        maxHeight: 40,
        minWidth: 160,
        backgroundColor: '#52A9CF',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 24,
    },
})
