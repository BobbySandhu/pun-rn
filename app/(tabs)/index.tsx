import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { style } from '../../common/appStyles';
import JokeCardView from '@/components/JokeCardView';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchJokes = async () => {
    const url = 'https://official-joke-api.appspot.com/jokes/random/25';

    try {
      const cacheData = await AsyncStorage.getItem(url);

      if (cacheData !== null) {
        setData(JSON.parse(cacheData));
      }

      const response = await fetch(url);
      const json = await response.json();

      await AsyncStorage.setItem(url, JSON.stringify(json));

      setData(json);
    } catch (error) {
      const cacheData = await AsyncStorage.getItem(url);
      if (cacheData !== null) {
        setData(JSON.parse(cacheData));
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <View style={style.rootContainer}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large"/>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <JokeCardView setup={item.setup} punchline={item.punchline} />
          )}
          onRefresh={fetchJokes}
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        />
      )}
    </View>
  );
}
