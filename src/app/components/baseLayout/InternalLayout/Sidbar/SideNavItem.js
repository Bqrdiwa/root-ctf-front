import Axios from "axios";
import { API_categoryList } from "../../../../store/constant/Api/api";
import {
  ACCESS_TOKEN,
  USER_ROLE,
} from "../../../../store/constant/locaStorageNames";
import typeIs from "../../../../utils/Tools/typeIs";

export const loadChallenges = (save) => {
  Axios({
    method: "get",
    url: API_categoryList(),
    headers: { Authorization: `Bearer ${localStorage[ACCESS_TOKEN]}` },
  }).then((response) => {
    if (typeIs(response.data, "Array")) {
      save(
        response.data.map((subitem) => ({
          ...subitem,
          link: "challenges",
        }))
      );
    }
  });
};

function SideNavItem(initialChallenes = [], lang = {}) {
  const uRole = localStorage[USER_ROLE];
  let sideNavItems = [
    {
      id: 20,
      title: lang.challenges,
      link: "challenge",
      icon: "challengeMe",
      effect: loadChallenges,
      submenu: initialChallenes,
    },
    { id: 32, title: lang.member, link: "member", icon: "teamsMe" },
    { id: 33, title: lang.ranking, link: "ranking", icon: "rankingMe" },
    { id: 34, title: lang.askquestion, link: "askQuestion", icon: "faqMe" },
    { id: 35, title: lang.rule, link: "rule", icon: "ruleMe" },
  ];

  if (uRole !== "regular_user") {
    sideNavItems = [
      ...sideNavItems,
      {
        id: 64,
        title: lang.report,
        link: "reportsource",
        icon: "report",
        submenu: [
          { id: 65, title: lang.sources, link: "reportsource", icon: "report" },
          {
            id: 66,
            title: lang.challenges,
            link: "reportchallenge",
            icon: "challengeMe",
          },
          {
            id: 67,
            title: lang.persons,
            link: "reportmember",
            icon: "teamsMe",
          },
          {
            id: 68,
            title: lang.ranking,
            link: "reportranking",
            icon: "rankingMe",
          },
        ],
      },
    ];
  }

  return sideNavItems;
}
export default SideNavItem;
