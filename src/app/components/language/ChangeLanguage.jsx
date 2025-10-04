import React, { useCallback } from 'react';
import Button from '../@material/Button/Button';
import { LANGUAGES } from '../../store/constant/language';
import { convertObjectToArray } from '../../utils/Tools/convertObjectToArray';
import { change_language } from '../../store/action/language';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export const ChangeLanguage = () => {

  const language = useSelector(state => state.language);

  const buttonProps = {};

  switch (language.name) {
    case LANGUAGES.fa.name:
      buttonProps.key = "en";
      buttonProps.value = LANGUAGES.en.name;
      buttonProps.fontFamily = LANGUAGES.en.style.font;
      break;
    case LANGUAGES.en.name:
    default:
      buttonProps.key = "fa";
      buttonProps.value = LANGUAGES.fa.name;
      buttonProps.fontFamily = LANGUAGES.fa.style.font;
  }

  const dispatch = useDispatch(change_language);
  const changeLanguageHandler = useCallback(
    (lang) => dispatch(change_language(lang)),
    [dispatch],
  )

  return (
    <Button
      style={{ fontFamily: buttonProps.fontFamily }}
      color="primary"
      onClick={() => changeLanguageHandler(buttonProps.key)}
    >
      {buttonProps.value}
    </Button>
  )
}
