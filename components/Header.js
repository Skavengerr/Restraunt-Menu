import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {Container, Header as HeaderComponent, Title, Button, Left, Right, Body, Icon} from 'native-base'
export default function Header() {
    return (
        <View>
            <HeaderComponent style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon style={styles.icon} name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.title}>مستر تاكو</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={styles.icon} name='arrow-forward' />
                    </Button>
                </Right>
            </HeaderComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        minHeight: 90,
        backgroundColor: '#F6FAFF',
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '400',
    },
    icon: {
        color: '#444444',
        paddingHorizontal: 30,
    },
})