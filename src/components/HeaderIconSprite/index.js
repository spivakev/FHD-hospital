import React from 'react'

const HeaderIconSprite = (props) => {
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


  let todoIcon = <svg width={width ? width : 26} height={height ? height : 26} viewBox="0 0 26 26">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 0C1.9401 0 0 1.9401 0 4.33333V21.6667C0 24.0599 1.9401 26 4.33333 26H21.6667C24.0599 26 26 24.0599 26 21.6667V4.33333C26 1.9401 24.0599 0 21.6667 0H4.33333ZM7.22262 14.4445C6.42488 14.4445 5.77818 13.7978 5.77818 13C5.77818 12.2023 6.42488 11.5556 7.22262 11.5556H18.7782C19.5759 11.5556 20.2226 12.2023 20.2226 13C20.2226 13.7978 19.5759 14.4445 18.7782 14.4445H7.22262ZM5.77818 7.22217C5.77818 8.01992 6.42488 8.66662 7.22262 8.66662H18.7782C19.5759 8.66662 20.2226 8.01992 20.2226 7.22217C20.2226 6.42443 19.5759 5.77773 18.7782 5.77773H7.22262C6.42488 5.77773 5.77818 6.42443 5.77818 7.22217ZM7.22262 20.2222C6.42488 20.2222 5.77818 19.5755 5.77818 18.7777C5.77818 17.98 6.42488 17.3333 7.22262 17.3333H14.4448C15.2426 17.3333 15.8893 17.98 15.8893 18.7777C15.8893 19.5755 15.2426 20.2222 14.4448 20.2222H7.22262Z" fill="#454F59" />
  </svg>;

  let chatIcon = <svg width={width ? width : 29} height={height ? height : 26} viewBox="0 0 29 26">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19139 0C1.43612 0 0 1.43612 0 3.19139V17.2223C0 17.9324 0.859306 18.289 1.36195 17.7864L4.78708 14.3612H15.9569C17.7122 14.3612 19.1483 12.9251 19.1483 11.1699V3.19139C19.1483 1.43612 17.7122 0 15.9569 0H3.19139ZM22.3397 7.97847V11.1699C22.3397 14.6947 19.4818 17.5526 15.9569 17.5526H9.57416V19.1483C9.57416 20.9036 11.0103 22.3397 12.7655 22.3397H23.9354L27.3605 25.7648C27.8632 26.2675 28.7225 25.9108 28.7225 25.2007V11.1699C28.7225 9.41459 27.2864 7.97847 25.5311 7.97847H22.3397Z" fill="#454F59" />
  </svg>;

  let notificationIcon = <svg width={width ? width : 22} height={height ? height : 28} viewBox="0 0 22 28">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8889 0C9.60089 0 8.55556 1.04533 8.55556 2.33333V3.10382C4.53162 4.14104 3.11111 6.5408 3.11111 10.8889V17.1111L0.72309 18.9097C0.271453 19.1954 0 19.6904 0 20.2222C0 21.0813 0.696446 21.7778 1.55556 21.7778H10.8889H20.2222C21.0813 21.7778 21.7778 21.0813 21.7778 20.2222C21.7778 19.6904 21.5063 19.1954 21.0577 18.9097L18.6667 17.1111V10.8889C18.6667 6.5408 17.2462 4.14104 13.2222 3.10382V2.33333C13.2222 1.04533 12.1769 0 10.8889 0ZM7.77778 24.8889C7.77778 26.6 9.17778 28 10.8889 28C12.6 28 14 26.6 14 24.8889H7.77778Z" fill="#454F59" />
  </svg>;


  let sprite = {
    logo: logoIcon,
    todo: todoIcon,
    chat: chatIcon,
    notification: notificationIcon
  }

  return sprite[iconKey];
};

export default HeaderIconSprite;
