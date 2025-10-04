
import { LANGUAGES } from "../language";

export const InjectLanguage = (url) => {
  const language = localStorage.getItem("language");

  if (!LANGUAGES[language]) return url;
  if (language === "en") return url;
  else return `/${LANGUAGES[language].apiTag}${url}`;
}

export const InjectBaseURL = (url) => {
  return `${window.BASE_URL}${url}`;
}

export const InjectBaseStatics = (url) => {
  return `${window.STATIC_BASE_URL}${url}`;
}

export const InjectBaseWebSocket = (url) => {
  return `${window.WEBSOCKET_BASE_URL}${url}`;
}

export const ConfigureAPI = (url) => {
  return InjectBaseURL(InjectLanguage(url));
}

export const API_logo = () => ConfigureAPI(`/backend/system/api/v1/logos/`);
export const API_login = () => ConfigureAPI(`/backend/accounts/api/v1/login/`);
export const API_refreshToken = () => ConfigureAPI(`/backend/accounts/api/v1/refresh_token/`);
export const API_register = () => ConfigureAPI(`/backend/accounts/api/v1/register/`);
export const API_active = (string_one, string_two) => ConfigureAPI(`/backend/accounts/api/v1/activate/${string_one}/${string_two}`);
export const API_forgetpassword = () => ConfigureAPI(`/backend/accounts/api/v1/forget_password/request/`);
export const API_resetpassword = (string_one, string_two) => ConfigureAPI(`/backend/accounts/api/v1/forget_password/reset/${string_one}/${string_two}`);

export const API_counter = () => ConfigureAPI(`/backend/system/api/v1/timer/`);
export const API_askAndQuestion = () => ConfigureAPI(`/backend/auxiliaries/api/v1/faqs/`);
export const API_imageAvatar = (userId) => ConfigureAPI(`/backend/accounts/api/v1/profile/${userId}/`);

export const API_status = (userId) => ConfigureAPI(`/backend/accounts/api/v1/profile/${userId}/score/`);
export const API_statistic = (userId) => ConfigureAPI(`/backend/accounts/api/v1/profile/${userId}/statistics/`);
export const API_personalInfo = (userId) => ConfigureAPI(`/backend/accounts/api/v1/profile/${userId}/`);
export const API_changepassword = () => ConfigureAPI(`/backend/accounts/api/v1/change_password/`);

export const API_rule = () => ConfigureAPI(`/backend/auxiliaries/api/v1/rules/`);
export const API_ranking = () => ConfigureAPI(`/backend/accounts/api/v1/ranking/`);
export const API_member = () => ConfigureAPI(`/backend/accounts/api/v1/members`);

export const API_categortSummery = () => ConfigureAPI(`/backend/challenges/api/v1/categories_summary/`);
export const API_categoryList = () => ConfigureAPI(`/backend/challenges/api/v1/challenge_categories/`);

export const API_challengeList = (challengeId) => ConfigureAPI(`/backend/challenges/api/v1/category/${challengeId}/challenges/`);
export const API_detailChallenge = (challengeId) => ConfigureAPI(`/backend/challenges/api/v1/challenge/${challengeId}/`);
export const API_validationFlag = (challengeId) => ConfigureAPI(`/backend/challenges/api/v1/challenge/${challengeId}/validate_flag/`);
export const API_likeChallenge = (challengeId) => ConfigureAPI(`/backend/challenges/api/v1/challenge/${challengeId}/react/like/`);
export const API_dislikeChallenge = (challengeId) => ConfigureAPI(`/backend/challenges/api/v1/challenge/${challengeId}/react/dislike/`);

export const API_sponser = () => ConfigureAPI(`/backend/auxiliaries/api/v1/sponsors/`);
export const API_termOfServise = () => ConfigureAPI(`/backend/auxiliaries/api/v1/terms_of_service/`);
export const API_legalDisclaimer = () => ConfigureAPI(`/backend/auxiliaries/api/v1/legal_disclaimer/`);
export const API_confidentiality = () => ConfigureAPI(`/backend/auxiliaries/api/v1/confidentiality/`);
export const API_award = () => ConfigureAPI(`/backend/system/api/v1/prizes/`);
export const API_Final = () => ConfigureAPI(`/backend/system/api/v1/statistics/final/`);

export const API_reportMemberChart = (userId) => ConfigureAPI(`/backend/accounts/api/v1/profile/${userId}/statistics/`);
export const API_reportMemberSearch = () => ConfigureAPI(`/backend/accounts/api/v1/search_users_in_reports/`);
export const API_reportMemberLinkFile = (userId) => ConfigureAPI(`/backend/system/api/v1/reports/${userId}/percentages/`);
export const API_reportChallenge = () => ConfigureAPI(`/backend/system/api/v1/reports/challenges_percentages/`);
export const API_reportSourceDataAndFile = () => ConfigureAPI(`/backend/system/api/v1/reports/numerics/`);
export const API_reportRanking = () => ConfigureAPI(`/backend/accounts/api/v1/ranking/`);
export const API_reportRankingLinkFile = () => ConfigureAPI(`/backend/system/api/v1/reports/ranking/`);

export const API_commentUserList = () => ConfigureAPI(`/backend/comments/api/v1/comments/all/`);
export const API_commentSend = () => ConfigureAPI(`/backend/comments/api/v1/comment/send/`);
export const API_commentDelete = (comment_id) => ConfigureAPI(`/backend/comments/api/v1/comment/${comment_id}/`);
export const API_notapproveComment = () => ConfigureAPI(`/backend/comments/api/v1/comments/not_approved/`);
export const API_delete = (comment_id) => ConfigureAPI(`/backend/comments/api/v1/comment/${comment_id}/`);
export const API_approved = (comment_id) => ConfigureAPI(`/backend/comments/api/v1/comment/${comment_id}/approve/`);

export const SOCKET_get_points = (challenegId, token) => InjectBaseWebSocket(`/ws/challenges/score/${challenegId}/${token}/`);