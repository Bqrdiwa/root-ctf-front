import {
  UPLOAD_WORKSHOPCHALLENG_RESULTS,
  UPLOAD_CHALLENGHELP_RESULTS,
  UPLOAD_MYCHALLENGE_LIST_RESULT,
  DELETE_WORKSHOPCHALLENG_ITEM,
  DELETE_CHALLENGEHELP_ITEM,
  ACTIVE_WORKSHOPCHALLENG_ITEM,
  DEACTIVE_WORKSHOPCHALLENG_ITEM,
  RELEASE_CHALLENGE_HELP_ITEM,
  WITHDRAW_CHALLENEG_HELP_ITEM,
  ADD_MYCHALLENGE_TO_LIST,
  // UPDATE_WORKSHOP_CHALLENGE_LIST,
  UPLOAD_WORKSHOPMEMBER_RESULTS,
  DELETE_WORKSHOPMEMBER_ITEM,
  ACTIVE_WORKSHOP_MEMBER_ITEM,
  DEACTIVE_WORKSHOP_MEMBER_ITEM,
  UPLOAD_ERROR_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_FILE_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_LINK_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_IMAGE_RESULTS,
  DELETE_WORKSHOP_SOURCE_FILE_ITEM,
  DELETE_WORKSHOP_SOURCE_IMAGE_ITEM,
  DELETE_WORKSHOP_SOURCE_LINK_ITEM,
  RECORD_WORKSHOPID,
  UPLOAD_CHALLENGHELP_RESULTS_ERROR,
  UPLOAD_WORKSHOP_DETAILS,
  UPLOAD_ADD_NEW_HELP,
  UPLOAD_MY_WORKSHOP_LIST_RESULT,
  UPLOAD_JOIN_TO_WORKSHOP_RESULT,
  ADD_NEW_SOURCE_FILE,
  ADD_NEW_SOURCE_IMAGE,
  ADD_NEW_SOURCE_LINK,
  ACTIVE_WORKSHOP_ITEM,
  DEACTIVE_WORKSHOP_ITEM,

} from "../constant/workshopChalleneg";

const initialState = {
  MyWorkshopList: [],
  workshopChallenges: [],
  workshopMember: [],
  workshopSourceFile: [],
  workshopSourceImage: [],
  workshopSourceLink: [],
  ChallengeHelp: [],
  ChallengeTitle: '',
  challengeworkshopId: '',
  workshopId: '',
  MyChallengesList: [],
  challengeHelpStatus: '',
  workshopMemberStatus: '',
  workshopChallengeStatus: '',
  workshopUserRole: '',
  workshopjoin_key: '',
  workshopDetailData: {},
  Error: {},
}

export const workshop = (state = initialState, { type, payload }) => {
  switch (type) {


    case ACTIVE_WORKSHOP_ITEM:
      const originActive = state.workshopDetailData;
      const updateOriginActive = { ...originActive, active: true };
      return {
        ...state,
        workshopDetailData: updateOriginActive,
      }




    case DEACTIVE_WORKSHOP_ITEM:
      const originDeactive = state.workshopDetailData;
      const updateOriginDeactive = { ...originDeactive, active: false };
      return {
        ...state,
        workshopDetailData: updateOriginDeactive,
      }



    case ADD_NEW_SOURCE_FILE:
      return {
        ...state,
        workshopSourceFile: [...state.workshopSourceFile, payload.fileRecord]
      }


    case ADD_NEW_SOURCE_IMAGE:
      return {
        ...state,
        workshopSourceImage: [...state.workshopSourceImage, payload.imageRecord]
      }


    case ADD_NEW_SOURCE_LINK:
      return {
        ...state,
        workshopSourceLink: [...state.workshopSourceLink, payload.linkRecord]
      }


    case UPLOAD_JOIN_TO_WORKSHOP_RESULT:
      window.location.reload();
      return {
        ...state,
        MyWorkshopList: [...state.MyWorkshopList, payload.JoinWorkshop],
      }


    case UPLOAD_MY_WORKSHOP_LIST_RESULT:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_ADD_NEW_HELP:
      return {
        ...state,
        ChallengeHelp: [...state.ChallengeHelp, payload.NewHelp],
        challengeHelpStatus: '',
      }


    case UPLOAD_WORKSHOP_DETAILS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_CHALLENGHELP_RESULTS_ERROR:
      return {
        ...state,
        ...payload,
      }


    case RECORD_WORKSHOPID:
      return {
        ...state,
        ...payload,
      }


    case DELETE_WORKSHOP_SOURCE_FILE_ITEM:
      return {
        ...state,
        workshopSourceFile: state.workshopSourceFile.filter(
          item => item.id != payload.FileId
        ),
      }


    case DELETE_WORKSHOP_SOURCE_IMAGE_ITEM:
      return {
        ...state,
        workshopSourceImage: state.workshopSourceImage.filter(
          item => item.id != payload.ImageId
        ),
      }


    case DELETE_WORKSHOP_SOURCE_LINK_ITEM:
      return {
        ...state,
        workshopSourceLink: state.workshopSourceLink.filter(
          item => item.id != payload.LinkId
        ),
      }


    case UPLOAD_ERROR_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_WORKSHOPCHALLENG_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_WORKSHOPMEMBER_RESULTS:
      return {
        ...state,
        ...payload,
      }


   

    case UPLOAD_CHALLENGHELP_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_MYCHALLENGE_LIST_RESULT:
      return {
        ...state,
        ...payload,
      }


    case DELETE_WORKSHOPCHALLENG_ITEM:
      return {
        ...state,
        workshopChallenges: state.workshopChallenges.filter(
          item => item.id != payload.workshopId
        )
      }


    case DELETE_WORKSHOPMEMBER_ITEM:
      return {
        ...state,
        workshopMember: state.workshopMember.filter(
          item => item.id != payload.memberRowId
        )
      }


    case ADD_MYCHALLENGE_TO_LIST:
      return {
        ...state,
        workshopChallenges: [...state.workshopChallenges, payload.NewMychallenge],
        MyChallengesList: state.MyChallengesList.filter(
          item => item.id != payload.challengeId
        ),
      }


    case DELETE_CHALLENGEHELP_ITEM:
      return {
        ...state,
        ChallengeHelp: state.ChallengeHelp.filter(
          item => item.id != payload.helpId
        )
      }


    case RELEASE_CHALLENGE_HELP_ITEM:
      const itemIndexRelease = state.ChallengeHelp.findIndex(
        item => item.id == payload.helpId
      );

      const newChallengesHelpRelease = [
        ...state.ChallengeHelp.slice(0, itemIndexRelease),
        {
          ...state.ChallengeHelp[itemIndexRelease],
          release: true
        },
        ...state.ChallengeHelp.slice(itemIndexRelease + 1),
      ]

      return {
        ...state,
        ChallengeHelp: [...newChallengesHelpRelease]
      }


    case WITHDRAW_CHALLENEG_HELP_ITEM:
      const itemIndexWithdraw = state.ChallengeHelp.findIndex(
        item => item.id == payload.helpId
      );

      const newChallengesHelpWithdraw = [
        ...state.ChallengeHelp.slice(0, itemIndexWithdraw),
        {
          ...state.ChallengeHelp[itemIndexWithdraw],
          release: false
        },
        ...state.ChallengeHelp.slice(itemIndexWithdraw + 1),
      ]

      return {
        ...state,
        ChallengeHelp: [...newChallengesHelpWithdraw]
      }


    case ACTIVE_WORKSHOPCHALLENG_ITEM:
      const itemIndexActive = state.workshopChallenges.findIndex(
        item => item.id == payload.workshopId
      );

      const newWorkshopChallengesActive = [
        ...state.workshopChallenges.slice(0, itemIndexActive),
        {
          ...state.workshopChallenges[itemIndexActive],
          active: true
        },
        ...state.workshopChallenges.slice(itemIndexActive + 1),
      ]

      return {
        ...state,
        workshopChallenges: [...newWorkshopChallengesActive]
      }



    case DEACTIVE_WORKSHOPCHALLENG_ITEM:
      const itemIndexDeactive = state.workshopChallenges.findIndex(
        item => item.id == payload.workshopId
      );

      const newWorkshopChallengesDeactive = [
        ...state.workshopChallenges.slice(0, itemIndexDeactive),
        {
          ...state.workshopChallenges[itemIndexDeactive],
          active: false
        },
        ...state.workshopChallenges.slice(itemIndexDeactive + 1),
      ]

      return {
        ...state,
        workshopChallenges: [...newWorkshopChallengesDeactive]
      }



    case ACTIVE_WORKSHOP_MEMBER_ITEM:
      const itemIndexActiveMember = state.workshopMember.findIndex(
        item => item.id == payload.memberRowId
      );

      const newWorkshopMembersActive = [
        ...state.workshopMember.slice(0, itemIndexActiveMember),
        {
          ...state.workshopMember[itemIndexActiveMember],
          active: true
        },
        ...state.workshopMember.slice(itemIndexActiveMember + 1),
      ]

      return {
        ...state,
        workshopMember: [...newWorkshopMembersActive]
      }


    case DEACTIVE_WORKSHOP_MEMBER_ITEM:
      const itemIndexDeactiveMember = state.workshopMember.findIndex(
        item => item.id == payload.memberRowId
      );

      const newWorkshopMembersDeactive = [
        ...state.workshopMember.slice(0, itemIndexDeactiveMember),
        {
          ...state.workshopMember[itemIndexDeactiveMember],
          active: false
        },
        ...state.workshopMember.slice(itemIndexDeactiveMember + 1),
      ]

      return {
        ...state,
        workshopMember: [...newWorkshopMembersDeactive]
      }


    case UPLOAD_WORKSHOP_SOURCE_FILE_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_WORKSHOP_SOURCE_IMAGE_RESULTS:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_WORKSHOP_SOURCE_LINK_RESULTS:
      return {
        ...state,
        ...payload,
      }

    default:
      return state
  }
}

export default workshop;