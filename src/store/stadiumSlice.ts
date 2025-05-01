import { createSlice } from "@reduxjs/toolkit";
import { IStadium } from "../types/interfaces";
import { Stadiums } from "../pages/Football/IStadimList";

interface IinitialValue{
    stadiums: Array<IStadium>
}
const initialValue: IinitialValue = {
    stadiums: Stadiums
}

export const stadiumSlice = createSlice({
    name: "street_stadium",
    initialState: initialValue,
    reducers: {
        
    }
})

export const {} = stadiumSlice.actions

export default stadiumSlice.reducer