import { UPDATE_SEARCH, ADD_CATEGORIES } from "./model";

export const addCategories = data => (
  {
    type: ADD_CATEGORIES,
    payload: { data }
  }
)

export const updateSearch = ({query}) => (
  { type: UPDATE_SEARCH, payload: {search: query}}
)