import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6676cfe2145714a1bd72de04.mockapi.io//"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   
    try {const response = await axios.get("contacts");
    return response.data; }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})
export const addContact = createAsyncThunk("contacts/addContact", async ({name, number}, thunkAPI) => {
   
    try {const response = await axios.post("contacts", {name, number});
    return response.data; }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
  
        try {
            const response = await axios.delete(`contacts/${contactId}`);
        console.log(response);
    return response.data; }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})