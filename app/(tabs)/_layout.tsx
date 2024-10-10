import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function TabLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Jokes',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'home' : 'home-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="SearchScreen"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'search' : 'search-outline'}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="SavedScreen"
          options={{
            title: 'Saved',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? 'heart' : 'heart-outline'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <Toast />
    </>
  );
}
