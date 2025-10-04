import {
  UPLOAD_WORKSHOPCHALLENG_RESULTS,
  UPLOAD_CHALLENGHELP_RESULTS,
  UPLOAD_MYCHALLENGE_LIST_RESULT,
  DELETE_WORKSHOPCHALLENG_ITEM,
  DELETE_CHALLENGEHELP_ITEM,
  DEACTIVE_WORKSHOPCHALLENG_ITEM,
  ACTIVE_WORKSHOPCHALLENG_ITEM,
  RELEASE_CHALLENGE_HELP_ITEM,
  WITHDRAW_CHALLENEG_HELP_ITEM,
  ADD_MYCHALLENGE_TO_LIST,
  UPDATE_WORKSHOP_CHALLENGE_LIST,
  UPLOAD_WORKSHOPMEMBER_RESULTS,
  DELETE_WORKSHOPMEMBER_ITEM,
  DEACTIVE_WORKSHOP_MEMBER_ITEM,
  ACTIVE_WORKSHOP_MEMBER_ITEM,
  UPLOAD_ERROR_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_FILE_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_LINK_RESULTS,
  UPLOAD_WORKSHOP_SOURCE_IMAGE_RESULTS,
  DELETE_WORKSHOP_SOURCE_LINK_ITEM,
  DELETE_WORKSHOP_SOURCE_FILE_ITEM,
  DELETE_WORKSHOP_SOURCE_IMAGE_ITEM,
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


export const add_new_source_file = ({
  fileRecord,
}) => ({
  type: ADD_NEW_SOURCE_FILE,
  payload: {
    fileRecord,
  }
})


export const add_new_source_image = ({
  imageRecord,
}) => ({
  type: ADD_NEW_SOURCE_IMAGE,
  payload: {
    imageRecord,
  }
})


export const add_new_source_link = ({
  linkRecord,
}) => ({
  type: ADD_NEW_SOURCE_LINK,
  payload: {
    linkRecord,
  }
})

export const upload_join_to_workshop_result = ({
  JoinWorkshop,
}) => ({
  type: UPLOAD_JOIN_TO_WORKSHOP_RESULT,
  payload: {
    JoinWorkshop,
  }
})


export const upload_myworkshop_list_result = ({
  MyWorkshopList,
}) => ({
  type: UPLOAD_MY_WORKSHOP_LIST_RESULT,
  payload: {
    MyWorkshopList,
  }
})


export const upload_add_new_help = ({
  NewHelp,
}) => ({
  type: UPLOAD_ADD_NEW_HELP,
  payload: {
    NewHelp,
  }
})


export const upload_challenegHelp_results_error = ({
  ChallengeHelp,
  ChallengeTitle,
  challengeworkshopId,
  challengeHelpStatus,
}) => ({
  type: UPLOAD_CHALLENGHELP_RESULTS_ERROR,
  payload: {
    ChallengeHelp,
    ChallengeTitle,
    challengeworkshopId,
    challengeHelpStatus,
  }
})


export const upload_workshop_details = ({
  workshopUserRole,
  workshopjoin_key,
  workshopDetailData,
}) => ({
  type: UPLOAD_WORKSHOP_DETAILS,
  payload: {
    workshopDetailData,
    workshopUserRole,
    workshopjoin_key,
  }
})



export const Record_workshopId = ({
  workshopId,
}) => ({
  type: RECORD_WORKSHOPID,
  payload: {
    workshopId,
  }
})

export const delete_source_file_item = ({
  FileId,
}) => ({
  type: DELETE_WORKSHOP_SOURCE_FILE_ITEM,
  payload: {
    FileId,
  }
})

export const delete_source_image_item = ({
  ImageId,
}) => ({
  type: DELETE_WORKSHOP_SOURCE_IMAGE_ITEM,
  payload: {
    ImageId,
  }
})

export const delete_source_link_item = ({
  LinkId
}) => ({
  type: DELETE_WORKSHOP_SOURCE_LINK_ITEM,
  payload: {
    LinkId,
  }
})


export const upload_workshopSource_file_results = ({
  workshopSourceFile,
}) => ({
  type: UPLOAD_WORKSHOP_SOURCE_FILE_RESULTS,
  payload: {
    workshopSourceFile,
  }
})


export const upload_workshopSource_image_results = ({
  workshopSourceImage,
}) => ({
  type: UPLOAD_WORKSHOP_SOURCE_IMAGE_RESULTS,
  payload: {
    workshopSourceImage,
  }
})


export const upload_workshopSource_link_results = ({
  workshopSourceLink,
}) => ({
  type: UPLOAD_WORKSHOP_SOURCE_LINK_RESULTS,
  payload: {
    workshopSourceLink,
  }
})


export const upload_error_results = ({
  Error,
}) => ({
  type: UPLOAD_ERROR_RESULTS,
  payload: {
    Error,
  }
})


export const upload_workshopchalleneg_results = ({
  workshopChallenges,
  workshopId,
  workshopChallengeStatus,
}) => ({
  type: UPLOAD_WORKSHOPCHALLENG_RESULTS,
  payload: {
    workshopChallenges,
    workshopId,
    workshopChallengeStatus,
  }
})


export const upload_workshopMember_results = ({
  workshopMember,
  workshopMemberStatus,
}) => ({
  type: UPLOAD_WORKSHOPMEMBER_RESULTS,
  payload: {
    workshopMember,
    workshopMemberStatus,
  }
})

export const delete_workshopMember_item = ({
  memberRowId,
}) => ({
  type: DELETE_WORKSHOPMEMBER_ITEM,
  payload: {
    memberRowId,
  }
})


export const upload_MyChallengeList_results = ({
  MyChallengesList,
}) => ({
  type: UPLOAD_MYCHALLENGE_LIST_RESULT,
  payload: {
    MyChallengesList,
  }
})


export const upload_challenegHelp_results = ({
  ChallengeHelp,
  ChallengeTitle,
  challengeworkshopId,
  challengeHelpStatus,
}) => ({
  type: UPLOAD_CHALLENGHELP_RESULTS,
  payload: {
    ChallengeHelp,
    challengeworkshopId,
    ChallengeTitle,
    challengeHelpStatus,
  }
})


export const delete_workshopchalleng_item = ({
  workshopId
}) => ({
  type: DELETE_WORKSHOPCHALLENG_ITEM,
  payload: {
    workshopId,
  }
})




export const add_mychallenge_to_list = ({
  NewMychallenge,
  challengeId,
}) => ({
  type: ADD_MYCHALLENGE_TO_LIST,
  payload: {
    NewMychallenge,
    challengeId,
  }
})


export const delete_challengHelp_item = ({
  helpId
}) => ({
  type: DELETE_CHALLENGEHELP_ITEM,
  payload: {
    helpId,
  }
})

export const release_challengHelp_item = ({
  helpId
}) => ({
  type: RELEASE_CHALLENGE_HELP_ITEM,
  payload: {
    helpId,
  }
})


export const withdraw_challengHelp_item = ({
  helpId
}) => ({
  type: WITHDRAW_CHALLENEG_HELP_ITEM,
  payload: {
    helpId,
  }
})


export const active_workshop_item = ({
  workshopId
}) => ({
  type: ACTIVE_WORKSHOP_ITEM,
  payload: {
    workshopId,
  }
})


export const deactive_workshop_item = ({
  workshopId
}) => ({
  type: DEACTIVE_WORKSHOP_ITEM,
  payload: {
    workshopId,
  }
})


export const active_workshopchalleng_item = ({
  workshopId
}) => ({
  type: ACTIVE_WORKSHOPCHALLENG_ITEM,
  payload: {
    workshopId,
  }
})

export const deactive_workshopchalleng_item = ({
  workshopId,
}) => ({
  type: DEACTIVE_WORKSHOPCHALLENG_ITEM,
  payload: {
    workshopId,
  }
})

export const active_workshopMember_item = ({
  memberRowId
}) => ({
  type: ACTIVE_WORKSHOP_MEMBER_ITEM,
  payload: {
    memberRowId,
  }
})


export const deactive_workshopMember_item = ({
  memberRowId
}) => ({
  type: DEACTIVE_WORKSHOP_MEMBER_ITEM,
  payload: {
    memberRowId,
  }
})