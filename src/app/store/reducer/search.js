import {
  UPLOAD_SEARCH_RESULTS,
  UPLOAD_SEARCH_RESULTS_WORKSHOP,
  UPLOAD_SEARCH_RESULTS_REPORT,
  UPLOAD_REPORT_STATISTIC,
} from "../constant/search";


const initialState = {
  searchChallenges: [],
  searchPapers: [],
  searchUsers: [],
  searchWorkshops: [],
  searchKeyword: '',
  searchListWorkshop: [],
  searchListReportMember: [],

  TotalSolvedRate: [],
  solvedRateByDifficulty: [],
  validatByCategory: [],
  scoreEvolution: [],
  reportError:{},
  reportUserError:{}
}

export const search = (state = initialState, { type, payload }) => {
  switch (type) {

    case UPLOAD_REPORT_STATISTIC:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_SEARCH_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_SEARCH_RESULTS_WORKSHOP:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_SEARCH_RESULTS_REPORT:
      return {
        ...state,
        ...payload,
      }

    default:
      return state
  }
}

export default search;