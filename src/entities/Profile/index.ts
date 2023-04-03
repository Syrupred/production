import ProfileCard from './ui/ProfileCard/ProfileCard';

import { profileActions, profileReducer, initialState } from './model/slice/profileSlice';

export { ProfileSchema, Profile } from './model/types/profile';

export {
    profileActions, profileReducer, initialState,
};

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';
export { ProfileCard };
