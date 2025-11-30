import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchTravels = createAsyncThunk(
  "travel/fetchTravels",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/travels");

      if (!data.travels) {
        throw new Error("Error getting travels!");
      }

      return data.travels;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

export const fetchTravelById = createAsyncThunk(
  "travel/fetchTravelById",
  async (travelId, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/travels/" + travelId);

      if (!data.travel) {
        throw new Error("Error getting travel!");
      }

      return data.travel;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

export const createTravel = createAsyncThunk(
  "travel/createTravel",
  async (travelData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/travels", travelData);

      if (!data.travel) {
        throw new Error("Error creating travel!");
      }

      return data.travel;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

export const editTravel = createAsyncThunk(
  "travel/editTravel",
  async ({ travelId, travelData }, { rejectWithValue }) => {
    try {
      const { data } = await api.put("/travels/" + travelId, travelData);

      if (!data.travel) {
        throw new Error("Error editing travel!");
      }

      return data.travel;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

export const deleteTravel = createAsyncThunk(
  "travel/deleteTravel",
  async (travelId, { rejectWithValue }) => {
    try {
      const { data } = await api.delete("/travels/" + travelId);

      if (!data.travel) {
        throw new Error("Error deleting travel!");
      }

      return data.travel;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

const initialState = {
  travels: [],
  currentTravel: {},
  travelLoading: false,
  travelError: null,
};

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all travels
      .addCase(fetchTravels.pending, (state) => {
        state.travelLoading = true;
        state.travelError = null;
      })
      .addCase(fetchTravels.fulfilled, (state, action) => {
        state.travelLoading = false;
        state.travels = action.payload;
      })
      .addCase(fetchTravels.rejected, (state, action) => {
        state.travelLoading = false;
        state.travelError = action.payload;
      })

      // fetch current travel by id
      .addCase(fetchTravelById.pending, (state) => {
        state.travelLoading = true;
        state.travelError = null;
      })
      .addCase(fetchTravelById.fulfilled, (state, action) => {
        state.travelLoading = false;
        state.currentTravel = action.payload;
      })
      .addCase(fetchTravelById.rejected, (state, action) => {
        state.travelLoading = false;
        state.travelError = action.payload;
      })

      // create new travel
      .addCase(createTravel.pending, (state) => {
        state.travelLoading = true;
        state.travelError = null;
      })
      .addCase(createTravel.fulfilled, (state, action) => {
        state.travelLoading = false;
        state.travels = [action.payload, ...state.travels];
      })
      .addCase(createTravel.rejected, (state, action) => {
        state.travelLoading = false;
        state.travelError = action.payload;
      })

      // edit travel by id
      .addCase(editTravel.pending, (state) => {
        state.travelLoading = true;
        state.travelError = null;
      })
      .addCase(editTravel.fulfilled, (state, action) => {
        state.travelLoading = false;
        state.travels = state.travels.map(travel => travel._id === action.payload._id ? action.payload : travel);
      })
      .addCase(editTravel.rejected, (state, action) => {
        state.travelLoading = false;
        state.travelError = action.payload;
      })

      // delete travel by id
      .addCase(deleteTravel.pending, (state) => {
        state.travelLoading = true;
        state.travelError = null;
      })
      .addCase(deleteTravel.fulfilled, (state, action) => {
        state.travelLoading = false;
        state.travels = state.travels.filter(travel => travel._id !== action.payload._id);
      })
      .addCase(deleteTravel.rejected, (state, action) => {
        state.travelLoading = false;
        state.travelError = action.payload;
      })
  },
});

export default travelSlice.reducer;
