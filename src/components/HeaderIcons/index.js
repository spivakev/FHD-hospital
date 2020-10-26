import React from 'react'

const HeaderIcons = (props) => {
  let width = props.width;
  let height = props.height;
  let iconKey = props.iconKey;

  let logoIcon = <svg width={width ? width : 38} height={height ? height : 38} viewBox="0 0 38 38">
    <rect width="38" height="38" rx="10" fill="url(#paint0_linear)" />
    <path d="M11.5035 13H15.1835L19.0635 20.1L22.9035 13H26.5035V27H22.9035V18.98L20.0035 24.3H18.0035L15.1035 18.98V27H11.5035V13Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear" x1="19" y1="0" x2="19" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#71C6FF" />
        <stop offset="1" stop-color="#0498FC" />
      </linearGradient>
    </defs>
  </svg>;

  let searchIcon = <svg width={width ? width : 24} height={height ? height : 24} viewBox="0 0 24 24" >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0004 21.1004C5.42232 21.1004 0.900391 16.5785 0.900391 11.0004C0.900391 5.42232 5.42232 0.900391 11.0004 0.900391C16.5785 0.900391 21.1004 5.42232 21.1004 11.0004C21.1004 13.3932 20.2683 15.5916 18.8778 17.3221L22.7782 21.2226C23.2078 21.6521 23.2078 22.3486 22.7782 22.7782C22.3486 23.2078 21.6521 23.2078 21.2226 22.7782L17.3221 18.8778C15.5916 20.2683 13.3932 21.1004 11.0004 21.1004ZM11.0004 18.9004C15.3634 18.9004 18.9004 15.3634 18.9004 11.0004C18.9004 6.63734 15.3634 3.10039 11.0004 3.10039C6.63734 3.10039 3.10039 6.63734 3.10039 11.0004C3.10039 15.3634 6.63734 18.9004 11.0004 18.9004Z" fill="#737F8B" />
  </svg>;

  let sprite = {
    logo: logoIcon,
    search: searchIcon
  }


  return sprite[iconKey];
};

export default HeaderIcons;

