import {
  UPLOAD_SEARCH_RESULTS,
  UPLOAD_SEARCH_RESULTS_WORKSHOP,
  UPLOAD_SEARCH_RESULTS_REPORT,
  UPLOAD_REPORT_STATISTIC,
} from "../constant/search";


export const upload_search_results = ({
  searchChallenges,
  searchPapers,
  searchUsers,
  searchWorkshops,
  searchKeyword
}) => ({
  type: UPLOAD_SEARCH_RESULTS,
  payload: {
    searchChallenges,
    searchPapers,
    searchUsers,
    searchWorkshops,
    searchKeyword
  }
})


export const upload_search_results_workshop = ({
  searchListWorkshop,
}) => ({
  type: UPLOAD_SEARCH_RESULTS_WORKSHOP,
  payload: {
    searchListWorkshop,
  }
})


export const upload_search_results_report = ({
  searchListReportMember,
  reportUserError,
}) => ({
  type: UPLOAD_SEARCH_RESULTS_REPORT,
  payload: {
    searchListReportMember,
    reportUserError,
  }
})



export const upload_Report_Statistic = ({
  TotalSolvedRate,
  solvedRateByDifficulty,
  validatByCategory,
  scoreEvolution,
  reportError,
}) => ({
  type: UPLOAD_REPORT_STATISTIC,
  payload: {
    TotalSolvedRate,
    solvedRateByDifficulty,
    validatByCategory,
    scoreEvolution,
    reportError,
  }
})