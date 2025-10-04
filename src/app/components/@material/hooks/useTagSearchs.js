import { useState, useCallback, useEffect } from "react";
import { useLoadComponent } from "./useLoadComponent";
import { useProtectedSubmit } from "./useProtectedSubmit";

export const useTagSearches = ({ match, onChange, name }, contentAPIS = [], sumnitAPI) => {

  const [searched, setsearched] = useState({})

  // contents that will be load 
  const [{ content = {} }, loadSerach] = useLoadComponent(contentAPIS)

  const [submit, { response = [] }, load] = useProtectedSubmit(
    sumnitAPI,
    {},
    {
      params: {
        community_id: match.params.community_name
      }
    }
  )

  const handleSearch = useCallback(
    (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      submit({ liveValues: { user_name_part: data.get("searchSomeUser") } });
    }, [submit]
  )

  const handleClick = useCallback((user) => setsearched(user), []);

  const clearSearch = useCallback(() => setsearched({}), [])

  useEffect(() => onChange({ [name]: searched.id || undefined }), [searched])

  return {
    content,
    clearSearch,
    usersSearched: response,

    search: handleSearch,
    selectUser: handleClick,
    selectedUser: searched,
    load: load + loadSerach
  }
};