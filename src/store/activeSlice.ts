
import { createSlice } from '@reduxjs/toolkit'

interface PropsInitialState {
    isHomeActive: boolean,
    isProjectActive: boolean,
    isCertificateActive: boolean,
    isListOpen: boolean,
}

const initialState: PropsInitialState = {
    isHomeActive: false,
    isProjectActive: false,
    isCertificateActive: false,
    isListOpen: false
}

export const activeSlice = createSlice({
    name: 'active',

    initialState,

    reducers: {
        onActiveHome: (state) => {
            state.isHomeActive = true;
            state.isProjectActive = false;
            state.isCertificateActive = false;
            state.isListOpen = false;
        },

        onActiveProject: (state) => {
            state.isHomeActive = false;
            state.isProjectActive = true;
            state.isCertificateActive = false;
            state.isListOpen = false;
        },

        onActiveCertificate: (state) => {
            state.isHomeActive = false;
            state.isProjectActive = false;
            state.isCertificateActive = true;
            state.isListOpen = false;
        },

        onOpenList: (state) => {
            state.isHomeActive = false;
            state.isProjectActive = false;
            state.isCertificateActive = false;
            state.isListOpen = true;
        },

        onCloseList: (state) => {
            state.isHomeActive = false;
            state.isProjectActive = false;
            state.isCertificateActive = false;
            state.isListOpen = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    onActiveHome,
    onActiveProject,
    onActiveCertificate,
    onOpenList,
    onCloseList
} = activeSlice.actions

