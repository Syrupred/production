import { StateSchema } from 'app/provider/StoreProvider';

export const getAuthUserData = (state: StateSchema) => state?.user?.authData;

export const getUserInited = (state: StateSchema) => state?.user?._inited;
