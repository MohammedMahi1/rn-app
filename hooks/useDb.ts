
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from "db/schema"
import { useSQLiteContext } from 'expo-sqlite';


const useDb = () => {
    const expo = useSQLiteContext();
    
    return drizzle(expo, { schema });
}

export default useDb