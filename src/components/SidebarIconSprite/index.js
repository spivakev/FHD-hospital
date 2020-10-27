import React from 'react'

const SidebarIconSprite = (props) => {
  let iconKey = props.iconKey;

  let width = props.width ? props.width : '40';
  let height = props.height ? props.height : '40';

  let bg = props.bg ? props.bg : 'none';
  let color = props.color ? props.color : '#B7C0CE';

  let cardiogramIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M31.6667 35H8.33333C6.49167 35 5 33.5083 5 31.6667V8.33333C5 6.49167 6.49167 5 8.33333 5H31.6667C33.5083 5 35 6.49167 35 8.33333V31.6667C35 33.5083 33.5083 35 31.6667 35Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 19.9997H13.3333L16.6667 13.333L23.3333 26.6663L26.93 19.9997H30" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let historyIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M20 8.33307C16.2833 4.6164 10.495 4.23474 6.35333 7.18807C5.49 7.80307 5 8.82307 5 9.88307V31.4764C5 32.7664 6.375 33.5147 7.51333 32.9081C11.525 30.7697 16.62 31.3914 20 34.7731V8.33307C23.7167 4.6164 29.505 4.23474 33.6467 7.18807C34.51 7.80307 35 8.82307 35 9.88307V31.4764C35 32.7664 33.625 33.5164 32.4867 32.9081C28.475 30.7697 23.38 31.3914 20 34.7731" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let calendarIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M26.666 3.33301V9.99967" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.334 3.33301V9.99967" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 15H35" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M31.6667 6.66602H8.33333C6.49167 6.66602 5 8.15768 5 9.99935V31.666C5 33.5077 6.49167 34.9994 8.33333 34.9994H31.6667C33.5083 34.9994 35 33.5077 35 31.666V9.99935C35 8.15768 33.5083 6.66602 31.6667 6.66602Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.666 23.033L20.0993 20.833" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.8672 29.166H22.3339" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.0996 20.833V29.1663" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let happySmileIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M5.75 20C5.75 12.1292 12.1292 5.75 20 5.75C27.8708 5.75 34.25 12.1292 34.25 20" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M34.25 20C34.25 27.8708 27.8708 34.25 20 34.25C12.1292 34.25 5.75 27.8708 5.75 20" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.459 15.25V16.8333" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.541 15.25V16.8333" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.5423 24.2559C25.5423 24.2559 23.4634 26.3332 20.0007 26.3332C16.5363 26.3332 14.459 24.2559 14.459 24.2559" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let bodyMapIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M21.4549 27.8037H18.6933C17.8099 27.8037 16.9616 28.1554 16.3366 28.7804L13.4916 31.6254C12.4416 32.6754 13.1849 34.4704 14.6699 34.4704H25.4783C26.9633 34.4704 27.7066 32.6754 26.6566 31.6254L23.8116 28.7804C23.1866 28.1554 22.3383 27.8037 21.4549 27.8037V27.8037Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.5945 29.7321C3.5545 23.8371 3.81117 14.9704 9.38617 9.39375C15.2445 3.53542 24.7412 3.53542 30.5995 9.39375C36.1762 14.9704 36.4312 23.8388 31.3912 29.7321" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.9128 25.5647C10.1445 21.9697 10.3695 16.8113 13.6628 13.518C17.2428 9.93801 23.0462 9.93801 26.6262 13.518C29.9212 16.813 30.1445 21.9697 27.3745 25.5647" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.3533 17.3684C23.8067 18.8218 23.8067 21.1782 22.3533 22.6316C20.8999 24.085 18.5435 24.085 17.0901 22.6316C15.6366 21.1782 15.6366 18.8218 17.0901 17.3684C18.5435 15.915 20.8999 15.915 22.3533 17.3684Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  let sadSmileIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M35 20C35 11.73 28.27 5 20 5C11.7283 5 5 11.7283 5 20" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 35C28.2717 35 35 28.27 35 20" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 20C5 28.2717 11.7283 35 20 35" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.992 15C24.888 15 23.9921 15.896 24.0001 17C24.0001 18.104 24.896 19 26 19C27.104 19 28 18.104 28 17C28 15.896 27.104 15 25.992 15Z" fill={color} />
    <path d="M13.992 15C12.888 15 11.9921 15.896 12.0001 17C12.0001 18.104 12.896 19 14 19C15.104 19 16 18.104 16 17C16 15.896 15.104 15 13.992 15Z" fill={color} />
    <path d="M14.166 26.6671C14.166 26.6671 16.3543 24.4805 19.9993 24.4805C23.646 24.4805 25.8327 26.6671 25.8327 26.6671" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let diagramIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M26.3326 20.2486V15.25H21.334" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M31.084 10.5003L32.6673 8.91699" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 8.91699H8.91667C7.16708 8.91699 5.75 10.3341 5.75 12.0837V31.0837C5.75 32.8332 7.16708 34.2503 8.91667 34.2503H29.5C31.2496 34.2503 32.6667 32.8332 32.6667 31.0837V23.167" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M32.666 15.25H34.8985" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M26.334 8.91707V6.68457" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.75 22.5653C18.4167 25.4106 24.3542 17.2295 24.3542 17.2295" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let roundDiagramIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M34.25 20C34.25 27.8708 27.8708 34.25 20 34.25C12.1292 34.25 5.75 27.8708 5.75 20C5.75 12.1292 12.1292 5.75 20 5.75C27.8708 5.75 34.25 12.1292 34.25 20Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M30.0763 30.0763L20.4639 20.4639C20.1663 20.1663 20 19.7641 20 19.3445V5.75" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.1113 19.9367L32.3347 12.875" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let moleculeIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M22.6205 17.3791C24.068 18.8266 24.068 21.1735 22.6205 22.621C21.173 24.0685 18.8261 24.0685 17.3786 22.621C15.9311 21.1735 15.9311 18.8266 17.3786 17.3791C18.8261 15.9316 21.173 15.9316 22.6205 17.3791Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M34.9607 17.6412C36.2635 18.944 36.2635 21.0563 34.9607 22.3591C33.6579 23.6619 31.5456 23.6619 30.2427 22.3591C28.9399 21.0563 28.9399 18.944 30.2427 17.6412C31.5456 16.3384 33.6578 16.3384 34.9607 17.6412" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.75755 17.6412C11.0604 18.944 11.0604 21.0563 9.75755 22.3591C8.45473 23.6619 6.34245 23.6619 5.03962 22.3591C3.73679 21.0563 3.73679 18.944 5.03962 17.6412C6.34244 16.3384 8.45472 16.3384 9.75755 17.6412" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.6599 6.72712C29.9627 8.02994 29.9627 10.1422 28.6599 11.4451C27.3571 12.7479 25.2448 12.7479 23.942 11.4451C22.6391 10.1422 22.6391 8.02995 23.942 6.72712C25.2448 5.42429 27.3571 5.42429 28.6599 6.72712Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.0603 28.5548C17.3631 29.8576 17.3631 31.9699 16.0603 33.2727C14.7575 34.5755 12.6452 34.5755 11.3424 33.2727C10.0395 31.9699 10.0395 29.8576 11.3424 28.5548C12.6452 27.2519 14.7575 27.2519 16.0603 28.5548Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.0603 6.72712C17.3631 8.02994 17.3631 10.1422 16.0603 11.4451C14.7575 12.7479 12.6452 12.7479 11.3424 11.4451C10.0395 10.1422 10.0395 8.02995 11.3424 6.72712C12.6452 5.42429 14.7575 5.42429 16.0603 6.72712Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M28.6599 28.5548C29.9627 29.8576 29.9627 31.9699 28.6599 33.2727C27.3571 34.5755 25.2448 34.5755 23.942 33.2727C22.6391 31.9699 22.6391 29.8576 23.942 28.5548C25.2448 27.2519 27.3571 27.2519 28.6599 28.5548Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.3613 28.0274L18.148 23.1982" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.3613 11.9727L18.148 16.8018" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M29.2626 20H23.7051" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  let rocketIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M21.4891 18.5117L10.2949 29.7059" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.5033 21.5817L6.02019 20.2865C5.41694 20.144 5.20477 19.3951 5.64177 18.9565L10.0023 14.596C10.2952 14.3031 10.6926 14.1353 11.109 14.1321L16.0253 14.0894" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M32.4758 15.2104L33.7552 9.0544C34.1035 7.37923 32.6215 5.89723 30.9463 6.24556L24.7903 7.5249C22.9774 7.90173 21.3149 8.79948 20.0071 10.1089L14.9563 15.1581C13.0293 17.0851 11.7753 19.5836 11.3795 22.28L11.3621 22.3956C11.1119 24.1166 11.6883 25.8536 12.9169 27.0838C14.1456 28.3125 15.8841 28.8888 17.6052 28.6371L17.7208 28.6196C20.4172 28.2254 22.9157 26.9698 24.8426 25.0429L29.8918 19.9936C31.2013 18.6858 32.099 17.0233 32.4758 15.2104V15.2104Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.2168 8.46387C25.8759 10.9592 29.041 14.1243 31.5363 17.7834" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.416 28.4976L19.7112 33.9807C19.8537 34.5839 20.6026 34.7961 21.0412 34.3591L25.4017 29.9986C25.6946 29.7057 25.8624 29.3083 25.8656 28.8918L25.9083 23.9756" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  let communityIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M22.7983 18.3884C24.3441 19.9342 24.3441 22.4405 22.7983 23.9863C21.2525 25.5321 18.7462 25.5321 17.2004 23.9863C15.6546 22.4405 15.6546 19.9342 17.2004 18.3884C18.7462 16.8425 21.2525 16.8425 22.7983 18.3884Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M31.4858 8.88837C33.0316 10.4342 33.0316 12.9405 31.4858 14.4863C29.94 16.0321 27.4337 16.0321 25.8879 14.4863C24.3421 12.9405 24.3421 10.4342 25.8879 8.88837C27.4337 7.34255 29.94 7.34255 31.4858 8.88837" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M29.5 20.3955C31.9273 20.3955 34.25 21.2394 35.8333 22.5061" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.1108 8.88837C15.6566 10.4342 15.6566 12.9405 14.1108 14.4863C12.565 16.0321 10.0587 16.0321 8.51289 14.4863C6.96706 12.9405 6.96706 10.4342 8.51289 8.88837C10.0587 7.34255 12.565 7.34255 14.1108 8.88837" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.16602 22.5061C5.74935 21.2394 8.0721 20.3955 10.4993 20.3955" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M27.2686 32.2705C25.4241 30.8439 22.7736 29.8955 19.9996 29.8955C17.2256 29.8955 14.5751 30.8439 12.7305 32.2705" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>;

  let addCardIcon = <svg width={width} height={height} viewBox="0 0 40 40" fill={bg}>
    <path d="M31.5895 35H8.40951C6.56784 35 5.07617 33.5083 5.07617 31.6667V18.3333C5.07617 16.4917 6.56784 15 8.40951 15H31.5895C33.4312 15 34.9228 16.4917 34.9228 18.3333V31.6667C34.9228 33.5083 33.4295 35 31.5895 35Z" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.9707 15V13.3333C7.9707 11.4917 9.46237 10 11.304 10H28.6957C30.5374 10 32.029 11.4917 32.029 13.3333V15" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.8594 10V8.33333C10.8594 6.49167 12.351 5 14.1927 5H25.8077C27.6494 5 29.141 6.49167 29.141 8.33333V10" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 20V30" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M24.8327 24.8335H15.166" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


  let sprite = {
    cardiogram: cardiogramIcon,
    history: historyIcon,
    calendar: calendarIcon,
    happySmile: happySmileIcon,
    bodyMap: bodyMapIcon,
    sadSmile: sadSmileIcon,
    diagram: diagramIcon,
    roundDiagram: roundDiagramIcon,
    molecule: moleculeIcon,
    rocket: rocketIcon,
    community: communityIcon,
    addCard: addCardIcon
  }

  return sprite[iconKey];
};

export default SidebarIconSprite;

