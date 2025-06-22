import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const tasksSelector = createSelector((state: RootState) => state.tasks,
    async () => {
        try {
            await AsyncStorage.getItem('tasks');
        } catch (err) {
            console.log(err);
        }
    })