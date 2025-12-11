import { createSlice } from '@reduxjs/toolkit';

const normalizedUsers = [
  {
    id: "a304959a-76c0-4b34-954a-b38dbf310360",
    name: "Antony",
  },
  {
    id: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
    name: "Diana",
  },
  {
    id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
    name: "Lolly",
  },
  {
    id: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
    name: "Agata",
  },
  {
    id: "1547335a-ea18-4547-a73d-32bd6e9f651c",
    name: "Rebeca",
  },
  {
    id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    name: "Sam",
  },
];

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
  ids: normalizedUsers.map((user) => user.id),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsers: (state) => state.ids.map((id) => state.entities[id]),
  },
});

export const { selectUserById, selectUsers } = userSlice.selectors;

export default userSlice.reducer;
