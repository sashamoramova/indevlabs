// import { userReducer } from '@/entities/user';
// import { notificationsReducer } from '@/features/notifications';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // user: userReducer,
    // notifications: notificationsReducer,
    // task: taskReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
