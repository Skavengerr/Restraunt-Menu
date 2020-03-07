import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Container} from 'native-base'

import Header from './components/Header'
import Description from './components/Description'
import MenuList from './components/MenuList'
import FooterButton from './components/FooterButton'

export default class App extends Component {
    render() {
        return (
            <Container style={styles.view}>
                <Header style={styles.header} />
                <View style={styles.description}>
                    <Description />
                </View>
                <View style={styles.content}>
                    <MenuList />
                </View>
                <FooterButton style={styles.footer} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F6FAFF',
    },
    header: {
        flex: 3,
        minHeight: 100,
    },
    description: {
        flex: 2,
        marginVertical: 20,
    },
    content: {
        flex: 5,
    },
    footer: {
      flex: 1
    }
})
