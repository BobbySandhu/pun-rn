import { style } from '@/common/appStyles';
import JokeCardView from '@/components/JokeCardView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

export default function CategoryJokeList() {
  const local = useLocalSearchParams();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchCategoryJokes = async () => {
    const url = `https://official-joke-api.appspot.com/jokes/${local.type}/ten`;
    try {
      const cachedData = await AsyncStorage.getItem(url);

      if (cachedData !== null) {
        setData(JSON.parse(cachedData));
      }

      const response = await fetch(url);
      const json = await response.json();

      await AsyncStorage.setItem(url, JSON.stringify(json));

      setData(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryJokes();
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
          onRefresh={fetchCategoryJokes}
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        />
      )}
    </View>
  );
}
