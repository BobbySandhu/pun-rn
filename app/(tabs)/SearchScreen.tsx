import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { style } from '../../common/appStyles';
import CategoryCardView from '@/components/JokeCategory';
import { useEffect, useState } from 'react';

export default function SearchScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/types'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={style.rootContainer}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={data}
          //keyExtractor={({ id }) => id}
          renderItem={({ item }) => <CategoryCardView type={item} />}
          onRefresh={fetchCategories}
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        />
      )}
    </View>
  );
}
