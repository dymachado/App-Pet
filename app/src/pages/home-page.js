import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, ScrollView } from 'react-native';
import AppHeader from '../components/component-header';

export default class PageHeader extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppHeader title="Appet" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVGhD7dYxDYBAEETR1UFBgSAEQE+CAIIESmoEoOJKlKAERgDFNlz24L/kC5huDACKtqsUuFW5nOoK3KFcPjOkU0PgWgUAAFCqWjWBq5QLNz5T/xsCAACA94xqDlyvXLjxmXIPWdQWuEkBAIBnZjdy5Hn0G9s9EwAAAABJRU5ErkJggg==" backgroundColor="#009688" />
        <ScrollView style={styles.container}>
          <Text>Bem Vindx ao Appet, o aplicativo destinado a doação e adoção de Cães e Gatos </Text>
        </ScrollView>
        <Image
          style={styles.appHeaderButton}
          source={require('../../assets/logo.jpg')}
        />
        <View style={styles.container}>
          <Dice title="ADOÇÃO E DOAÇÃO" />
        </View>
        <View style={styles.container}>
          <Dice title="CUIDADOS" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
  },
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
   
  },
    bots: {
    flex: 1,
    backgroundColor: '#FFB400',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
