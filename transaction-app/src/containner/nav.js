import React from "react";

const nav = [
    {
        name: "Trang chủ",
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z" fill="#000000" opacity="0.3" />
                <path d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z" fill="#000000" />
            </g>
        </svg>,
        children: [
        ]
    },

    {
        name: "Quản trị hệ thống",
        logo:  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="Group_309" data-name="Group 309" transform="translate(-35 -108)">
                <rect id="Frame" width="24" height="24" transform="translate(35 108)"
                      fill="#01579b" opacity="0"/>
                <path id="Bill"
                      d="M18,5.559v5.5a2.614,2.614,0,0,1-.93,2.033,3.2,3.2,0,0,1-2.195.824h-.69a1.127,1.127,0,0,1-.154-.01,1.03,1.03,0,0,1-.153-.029l-10.735.039a3.229,3.229,0,0,1-2.214-.824A2.61,2.61,0,0,1,0,11.06V0H14.185V5.559Zm-5.444,6.709V1.648H1.648V11.06a1.089,1.089,0,0,0,.422.844,1.58,1.58,0,0,0,1.073.364ZM4.1,4.1H9.814V5.731H4.1Zm0,3.259H8.186V9.009H4.1Zm10.773,4.907a1.592,1.592,0,0,0,1.064-.364,1.078,1.078,0,0,0,.431-.844V7.188H14.185v5.08Z"
                      transform="translate(38 113)" fill="#90a4ae"/>
            </g>
        </svg>,
        children: [
            {
                name: "Quản lí người dùng",
                link: "/user",
                name_identified: "PAGE.USER"
            },
            {
                name: "Quản lí quyền",
                link: "/role",
                name_identified: "PAGE.ROLE"
            },
        ]
    },

]

export default nav
