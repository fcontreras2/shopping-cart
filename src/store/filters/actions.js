import { UPDATE_SEARCH, ADD_CATEGORIES, APPLY_FILTER } from "./model";
import { searchProducts } from "../products/actions";

export const addCategories = data => (
  {
    type: ADD_CATEGORIES,
    payload: { data }
  }
)

export const updateSearch = ({query}) => (
  { type: UPDATE_SEARCH, payload: {search: query}}
)

export const applyFilter = (filter) => (
  (dispatch,getState) => {
    dispatch({
      type: APPLY_FILTER,
      payload: { filter : filter}
    })
    dispatch(
      searchProducts({ query: getState().filters.search})
    )
  }
)