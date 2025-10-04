
import * as ROUTES from "./routes";
import mergePath from "../../../utils/Tools/PathMaker/mergePath";
import urlCreator from "../../../utils/Tools/PathMaker/urlCreator";


const createLink = (path, params, search, hash) =>
  urlCreator(mergePath(path), params, search, hash)

export const GENERAL = () =>
  createLink(
    [
      ROUTES.ROURE_GENERAL
    ]
  );

export const FOOTERCONTENT = () =>
  createLink(
    [
      ROUTES.ROUTE_FOOTERCONTENT
    ]
  );// /footer/


export const REGISTER = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL
    ]
  );// /accounts/

export const ACTIVATE = (params) =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_EXTERNAL_ACTIVATE,
    ],
    params
  );// /accounts/activate/:stringone/:stringtwo

export const LOGIN = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_EXTERNAL_LOGIN
    ]
  ); // /accounts/login/


export const FORGETPASSWORD = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_EXTERNAL_FORGETPASSWORD
    ],
  );// /accounts/login/forget-password


export const RESETPASSWORD = (params) =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_EXTERNAL_RESETPASSWORD
    ],
    params,
  );// /accounts/reset-password/:string1/:string2

export const CONFIDENTIALITY = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_CONFIDENTIALITY,
    ]
  );// /home/confidentiality

export const LEGALDISCLAIMING = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_LEGALDISCLAIMING,
    ]
  );// /home/legalDisclaiming

export const TERMOFSERVICE = () =>
  createLink(
    [
      ROUTES.ROUTE_EXTERNAL,
      ROUTES.ROUTE_TERMOFSERVICE,
    ]
  );// /home/termOfService


export const INTERNAL = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
    ],

  );// /home/


export const PROFILE = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_INTERNAL_PROFILE,
    ]
  );// /home/profile


export const DASHBOARD = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_INTERNAL_DASHBOARD,
    ],
  );// /home/dashboard

export const LOGOUT = () =>
  createLink(
    [
      ROUTES.ROUTE_LOGOUT,
    ]
  );// /accounts(logout)

/*
footer-Notice
*/
export const INNERCONFIDENTIALITY = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CONFIDENTIALITY,
    ]
  );// /home/confidentiality

export const INNERLEGALDISCLAIMING = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_LEGALDISCLAIMING,
    ]
  );// /home/legalDisclaiming

export const INNERTERMOFSERVICE = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_TERMOFSERVICE,
    ]
  );// /home/termOfService


/* 
sidnavigation 
*/

export const CALENDAR = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CALENDAR,
    ]
  );// /home/calendar


export const INFORMATION = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_INFORMATION,
    ]
  );// /home/information


export const SPONSER = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      //  ROUTES.ROUTE_INFORMATION,
      ROUTES.ROUTE_SPONSER,
    ]
  );// /home/sponser

export const PARTNERS = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_PARTNERS,
    ]
  );// /home/partners

export const MEMBER = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_MEMBER,
    ]
  );// /home/member

export const RANKING = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_RANKING,
    ]
  );// /home/ranking

export const CONTRIBUTE = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CONTRIBUTE,
    ]
  );// /home/contribute

export const CONTACT = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CONTACT,
    ]
  );// /home/contact

export const ASKQUESTION = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_ASK_QUESTION,
    ]
  );// /home/askQuestion


export const FOUNDATION = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROURE_FOUNDATION,
    ]
  );// /home/foundation

export const DOCUMENTS = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_DOCUMENTS,
    ]
  );// /home/documents

export const TOOLS = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_TOOLS,
    ],
    params,
  );// /home/tools/

export const TOOL = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_TOOL,
    ],
    params,
  );// /home/tools/:tool_id

export const DESCRIPTION = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      //  ROUTES.ROUTE_TOOL,
      ROUTES.ROUTE_DESCRIPTION,
    ],
    params,
  );// /home/tools/description/:id

export const CHALLENGE = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CHALLENGE,
    ],
    params,
  );// /home/challenge

export const CHALLENGES = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_CHALLENGES,
    ],
    params,
  );// /home/challenges/:challeng_id

export const ALLCHALLENGES = () =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_ALL_CHALLENGES,
    ]
  );// /home/all-challenges


export const VIEWCHALLENGE = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_VIEW_CHALLENGE,
    ],
    params,
  );// /home/view_challenge/:challenge_id


export const EDITCHALLENGE = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_EDIT_CHALLENGE,
    ],
    params,
  );// /home/edit_challenge/:challenge_id


export const TEST = (params) =>
  createLink(
    [
      ROUTES.ROUTE_INTERNAL,
      ROUTES.ROUTE_TEST,
    ],
    params,
  );// /home/challenge_test/:challeng_id


export const COMMUNITY = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_COMMUNITY,
  ],
  );

export const USERPROFILE = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_USERPROFILE,
  ],
    params,
  );// /home/userprofile/:username

export const UNDERCONSTRUCTION = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_UNDER_CONSTRUCTION,
  ]);// /home/underconstruction

export const MESSAGES = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_MESSAGE_LIST,
  ]);// /home/messages

export const MESSAGE = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SHOW_MESSAGE,
  ],
    params);// /home/message:message_id


export const COMMENTS = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_COMMENT_LIST,
  ]);// /home/comments

export const NOAPPROVECOMMENT = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_NOAPPROVE_COMMENT_LIST,
  ]);// /home/no_approve_comment

export const SERVERINFORMATION = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SERVER_INFORMATION,
  ]);// /home/server-information

export const SERVERIMAGES = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SERVER_IMAGES,
  ], params);// /home/server-images:server_id

export const SERVERCONTAINERS = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SERVER_CONTAINERS,
  ], params);// /home/server-containers:server_id

export const LOADPAPER = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_LOAD_PAPER,
  ], params);// /home/load-paper:paper_id


export const SEARCHRESULT = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SEARCH,
  ]);// /home/search-result


export const SITEMAP = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_SITE_MAP,
  ]);// /home/site-map


export const MYWORKSHOPLIST = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_MYWORKSHOP_LIST,
  ]);// /home/my-workshops


export const WORKSHOPDETAILS = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_WORKSHOP_DETAILS,
  ], params);// /home/workshop-details/workshop_id


export const NEWWORKSHOP = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_CRETE_WORKSHOP,
  ]);// /home/new-workshop


export const EDITWORKSHOP = (params) =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_EDIT_WORKSHOP,
  ], params);// /home/edit-workshop/:workshop_id


export const REPORTSOURCE = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_REPORT_SOURCE,
  ]);// /home/report-source

export const REPORTCHALLENGE = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_REPORT_CHALLENEG,
  ]);// /home/report-challenge

export const REPORTMEMBER = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_REPORT_MEMBER,
  ]);// /home/report-member

export const REPORTRANKING = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_REPORT_RANKING,
  ]);// /home/report-ranking

export const RULE = () =>
  createLink([
    ROUTES.ROUTE_INTERNAL,
    ROUTES.ROUTE_RULES,
  ]);// /home/rules