

export const ROUTE_FOOTERCONTENT = "footerContent";

export const ROUTE_CONFIDENTIALITY = "confidentiality";
export const ROUTE_TERMOFSERVICE = "termOfService";
export const ROUTE_LEGALDISCLAIMING = "legalDisclaiming";

/* accounts */
export const ROURE_GENERAL = "";
// export const ROUTE_LAYOUT="layout";
export const ROUTE_EXTERNAL = "accounts";
export const ROUTE_EXTERNAL_LOGIN = "login";
export const ROUTE_EXTERNAL_ACTIVATE = "activate/:stringOne/:stringTwo";
export const ROUTE_EXTERNAL_FORGETPASSWORD = "forget-password";
export const ROUTE_EXTERNAL_RESETPASSWORD = "reset-password/:stringOne/:stringTwo";



/*home*/
export const ROUTE_INTERNAL = "home";
export const ROUTE_INTERNAL_PROFILE = "profile";
export const ROUTE_INTERNAL_DASHBOARD = "dashboard";
export const ROUTE_LOGOUT = "logout";



/* sidnavigation */
export const ROUTE_CALENDAR = "calendar";
export const ROUTE_INFORMATION = "information";
export const ROUTE_SPONSER = "sponser";
export const ROUTE_PARTNERS = "partners";
export const ROUTE_MEMBER = "member";
export const ROUTE_RANKING = "ranking";
export const ROUTE_CONTRIBUTE = "contribute";
export const ROUTE_CONTACT = "contact";
export const ROURE_FOUNDATION = "foundation";
export const ROUTE_DOCUMENTS = "documents";

export const ROUTE_TOOL = "tools/:tool_id";
export const ROUTE_TOOLS = "tools";
export const ROUTE_DESCRIPTION = "description/:id";

export const ROUTE_CHALLENGE = "challenges";
export const ROUTE_ALL_CHALLENGES = "all-challenges";///show list of all challenges for menager user.
export const ROUTE_VIEW_CHALLENGE = "view_challenge/:challenge_id";///show details of every one of challenge in all-challenges
export const ROUTE_EDIT_CHALLENGE = "edit_challenge/:challenge_id";///edit details of every one of challenge in all-challenges
export const ROUTE_CHALLENGES = "challenges/:challenge_id";///this page show list of challenges for every challenges sidbar nemu item//
export const ROUTE_TEST = "challenge_test/:challenge_id";///show discription about challenge and solve the challenge//


export const ROUTE_ASK_QUESTION = "askQuestion";
export const ROUTE_COMMUNITY = "community";

export const ROUTE_USERPROFILE = "userprofile/:user_name";

/* under-construction */

export const ROUTE_UNDER_CONSTRUCTION = "underconstruction";

/* show list of message  */

export const ROUTE_MESSAGE_LIST = "messages";
export const ROUTE_SHOW_MESSAGE = "message/:message_id";

/* show list of comment list from users (comment user in information sidbar items)*/
export const ROUTE_COMMENT_LIST = "comments";
export const ROUTE_NOAPPROVE_COMMENT_LIST = "NoApproveComment";


/* show list of server information  */
export const ROUTE_SERVER_INFORMATION = "server-information" /// show list of server information///

/* show server images from server information  */
export const ROUTE_SERVER_IMAGES = "server-images/:server_id" /// show list of server images///

/* show server containers from server information  */
export const ROUTE_SERVER_CONTAINERS = "server-containers/:server_id" /// show list of server containers///

/* show paper pages for read only  */
export const ROUTE_LOAD_PAPER = "load-paper/:paper_id" /// show list of server images///

/* show result for search */
export const ROUTE_SEARCH = "search-result" /// show result for search///

/* show site map navigation */
export const ROUTE_SITE_MAP = "site-map" /// show site map page///

/* show myworkshop list*/
export const ROUTE_MYWORKSHOP_LIST = "my-workshops" /// show myworkshop list///

/* show workshop details page*/
export const ROUTE_WORKSHOP_DETAILS = "workshop-details/:workshop_id" /// show workshop details for every workshop///

/* show create new workshop*/
export const ROUTE_CRETE_WORKSHOP = "new-workshop" /// create a new workshop///

/* show edit workshop*/
export const ROUTE_EDIT_WORKSHOP = "edit-workshop/:workshop_id" /// edit a  workshop///

/* report for source */
export const ROUTE_REPORT_SOURCE = "report-source"
/*report for challeneg*/
export const ROUTE_REPORT_CHALLENEG = "report-challenge"
/*report for member*/
export const ROUTE_REPORT_MEMBER = "report-member"
/*report for rankink*/
export const ROUTE_REPORT_RANKING = "report-ranking"

export const ROUTE_RULES="rules"