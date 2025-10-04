import React, { Component, useMemo } from 'react';
import InLink from '../../../../@material/Link/InLink';
import Div from '../../../../@material/Base/Div';
import { connect, useSelector } from 'react-redux';

const NoticeList = (isInternal, lang) => ([
  {
    id: '1',
    title: lang.Confidentiality,
    contentpage: isInternal ? 'innerConfidentiality' : 'confidentiality'
  },
  {
    id: '2',
    title: lang.Disclaimer,
    contentpage: isInternal ? 'innerLegalDisclaiming' : 'legalDisclaiming'
  },
  {
    id: '3',
    title: lang.Termsofservice,
    contentpage: isInternal ? 'innerTermOfService' : 'termOfService'
  },
]);

const Notice = (props) => {
  const { lang } = props;
  const { loggedIn } = useSelector(state => state.user);

  const listOfLinks = useMemo(() => NoticeList(loggedIn, lang), [loggedIn, lang]);

  return (
    <>
      <Div className="footer-landing-condition MainBox-font" >
        {
          listOfLinks.map((item, index) => (
            <p key={item.id}>
              {
                index
                  ? <span style={{ padding: "0px 4px" }}>|</span>
                  : null
              }
              <InLink to={item.contentpage} style={{ textDecoration: 'none' }}>
                <small>{item.title}</small>
              </InLink>
            </p>
          ))
        }
      </Div>
    </>
  )

}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(Notice)

