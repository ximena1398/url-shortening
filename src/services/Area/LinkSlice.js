import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shortLinks: [],
    longLinks: []
};

const LinkSlice = createSlice({
    name: "Link",
    initialState,
    reducers: {
        // 1 -> crea el estado (initialState) y el método que modifica el estado (setShortLinks) --- (es como useState pero no es useState)
        setShortLinks(state, { payload }) {
            state.shortLinks = [...state.shortLinks,payload]
        },
        createShortLink(){},

        setLongLinks(state, { payload }) {
            state.longLinks = [...state.longLinks,payload]
        },
        // 2) trigguer que ejecuta el createShortLink de LinkSaga
        createLongLink(){}
    },
});

const LinkActions = LinkSlice.actions;
const LinkReducer = LinkSlice.reducer;

export { LinkActions, LinkReducer };
