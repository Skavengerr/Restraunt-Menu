import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {List, ListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base'
import {Container, Tab, Tabs, ScrollableTab} from 'native-base'
import {FOOD, INDEX} from './constants'

export default function MenuList() {
    return (
        <Container>
            <Tabs initialPage='5' renderTabBar={() => <ScrollableTab />}>
                {INDEX.map(t => (
                    <Tab key={t.tab} tabStyle={styles.background} heading={t.tabTitle}>
                        <List style={styles.background}>
                            <ScrollView>
                                {FOOD.map(p => (
                                    <ListItem key={p.id} thumbnail style={styles.list}>
                                        <Left>
                                            <Thumbnail
                                                square
                                                size='120'
                                                style={{borderRadius: 12}}
                                                source={{uri: p.image}}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.title}>{p.title}</Text>
                                            <Text style={styles.description} note numberOfLines={1}>
                                                {p.description}
                                            </Text>
                                        </Body>
                                        <Right>
                                            <Text style={styles.price}>{p.price}</Text>
                                        </Right>
                                    </ListItem>
                                ))}
                            </ScrollView>
                        </List>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'right',
        alignSelf: 'flex-end',
        margin: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'right',
        alignSelf: 'flex-end',
        color: '#838890',
    },
    list: {
        flexDirection: 'row-reverse',
    },
    price: {
        paddingHorizontal: 15,
    },
    background: {
        backgroundColor: '#F6FAFF',
    },
})
