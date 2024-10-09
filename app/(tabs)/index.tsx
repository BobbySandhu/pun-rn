import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { style } from '../../common/appStyles';
import JokeCardView from '@/components/JokeCardView';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchJokes = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/jokes/random/25");
            const json = await response.json()
            setData(json)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchJokes()
    }, []);

    return (
        <View style={style.rootContainer}>
            {
                isLoading ? (<View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>)
                    : (<FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <JokeCardView setup={item.setup} punchline={item.punchline} />
                        )}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
                    />
                    )
            }
        </View>
    );
}