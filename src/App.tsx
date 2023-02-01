import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import axios from "axios";
import Icon from 'react-native-vector-icons/Feather';

function App(): JSX.Element {
  const [repos, setRepos] = useState([]);

  const getRepositories = () => {
    axios.get(`https://api.github.com/search/repositories?q=TETRISx&per_page=10`).then(
      res => {
        setRepos(res.data.items);
      }).catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      })
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImageStyle} source={{ uri: item.owner.avatar_url }} />
        <View>
          <View style={styles.itemNameStyle}>
            <Text>{`${item.name}`}</Text>
            <Text>{`${item.stargazers_count}`}</Text>
          </View>
          <View>
            <Text>{`${item.owner.login}`}</Text>
          </View>
        </View>
      </View>
    )
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.headerStyle}>
        <Text style={{ fontSize: 35 }}>Repositórios</Text>
        <View style={styles.searchStyle}>
          <Icon
            name='search'
            size={20}
            color='#3c3c4399'
          />
          <TextInput placeholder='Busca por Repositórios' placeholderTextColor='#3c3c4399'></TextInput>
        </View>
      </View>
      <View>
        <FlatList
          data={repos}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        >

        </FlatList>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemNameStyle: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchStyle: {    
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
  }
})
export default App;
