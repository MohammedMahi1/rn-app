import './global.css';

import 'react-native-gesture-handler';

import RootStack from './navigation';
import { Suspense } from 'react';
import { openDatabaseSync, SQLiteProvider } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from 'drizzle/migrations';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { index } from 'store';

export default function App() {
  const DATA_BASE = "tasks"
  const expoDb = openDatabaseSync(DATA_BASE);
  const db = drizzle(expoDb);
  const { success, error } = useMigrations(db, migrations);
  return (
    <Provider store={index}>

    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATA_BASE}
        options={{ enableChangeListener: true }}
        useSuspense
        >
        <RootStack />
      </SQLiteProvider>
    </Suspense>
        </Provider>
  )


}
