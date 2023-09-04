import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

import Logo from "../assets/Images/su.ico"
import SyuImg from "../assets/Images/syu.jpg"


const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Logout",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const MembersList=[
  {
    id:0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
  },
  {
    id:1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:false,
  },
  {
    id:2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
  },
  {
    id:3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
  },
  {
    id:4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:false,
  },
] 


const CallLogs = [
  {
    id:0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed:false,
    incoming:true,
 
  },
  {
    id:1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed:true,
    incoming:true,
   
  },
  {
    id:2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed:true,
    incoming:false,
   
  },
  {
    id:3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed:false,
    incoming:false,
 
  },
  {
    id:4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed:true,
    incoming:true,
   
  },
];

const ChatList = [
  {
    id: 0,
    img: "" ,
    name: "수호",
    msg: "이거봐 ㅋㅋ 진짜 재밌지",
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: "윤성훈",
    msg: "내일 오후 5시",
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: "물리치료 조교실",
    msg: "언제 완성 됩니까? ",
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: "또치",
    msg: "테스트 입니다.",
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: "나르샤",
    msg: "나르샤 나르샤",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: "이상민",
    msg: "밥 뭐먹지",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: "오왕택",
    msg: "테스트 테스트 테스트 테스트",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: "김영일",
    msg: "테스스스트 테스트트트 테스트",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "안녕 수야~ ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "안녕 수호야 무슨일이야~",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "백주년 기념관 사진 보내 줄 수 있니?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "당연하지 기다려봐",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "보냈어",
    img: SyuImg,
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "이거 파일로좀 보내줄 수 있어?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "알겠어 보낼게~~.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "이거봐 ㅋㅋ 진짜 재밌지",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "답장입니다.",
    message: "이거봐 ㅋㅋ 진짜 재밌지",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const SHARED_LINKS = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
]

const SHARED_DOCS = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
]


export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  SHARED_DOCS,
  SHARED_LINKS,
  CallLogs,
  MembersList,
};
