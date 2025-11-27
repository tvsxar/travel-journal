import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const handleAuth = createAsyncThunk(
  "auth/handleAuth",
  async ({ isLogin, userData }, { rejectWithValue }) => {
    try {
      const url = isLogin ? "/auth/login" : "/auth/register";
      const { data } = await api.post(url, userData);

      if (!data.user) {
        throw new Error(
          isLogin ? "Invalid email or password" : "Registration failed"
        );
      }

      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/auth/logout");

      return null;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed, please try again."
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/me");

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user data."
      );
    }
  }
);

const initialState = {
  user: null,
  userLoading: false,
  userError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Authentication (Login/Register)
      .addCase(handleAuth.pending, (state) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(handleAuth.fulfilled, (state, action) => {
        state.userLoading = false;
        state.user = action.payload;
      })
      .addCase(handleAuth.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.payload;
      })

      // Logout User
      .addCase(logoutUser.pending, (state) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.userLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.payload || "Logout failed";
      })

      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.payload;
      })
  },
});


export default authSlice.reducer;