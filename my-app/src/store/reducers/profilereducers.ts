import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface ProfileState {
    name: string;
}

const initialState: ProfileState = {
    name: ''
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action:any) => {
            console.log('HYDRATE', action.payload);
            if (action.payload.profile) {
                state.name = action.payload.profile.name;
            }
        });
          
    }
    
});

export const { setProfileData } = ProfileSlice.actions;
export default ProfileSlice.reducer;
