import { CatProps } from "./components/Cat";
import image01 from "./images/cat_01.jpeg";
import image02 from "./images/cat_02.jpeg";
import image03 from "./images/cat_03.jpeg";
import image04 from "./images/cat_04.jpeg";
import image05 from "./images/cat_05.jpeg";

export const catList: CatProps[] = [
  {
    catName: "猫助",
    catDescription:
    "ぼくは猫助です。3歳のオスです。マタタビが大好きです。よろしくおねがいいたします！",
    catImage: image01,
  },
  {
    catName: "猫子",
    catDescription:
      "私は猫子です。生後一ヶ月のオスです。ミルクが大好きです。よろしくおねがいいたします！",
    catImage: image02,
    isVisible: false
  },
  {
    catName: "ネムネコ",
    catDescription:
      "あたしはネムネコです。1歳のメスです。鰹節が大好きです。よろしくおねがいいたします！",
    catImage: image03,
  },
  {
    catName: "白猫ニャン魅",
    catDescription:
      "私は白猫ニャン魅です。4歳のメスです。お刺身が大好きです。よろしくおねがいいたします！",
    catImage: image04,
  },
  {
    catName: "ネコ王",
    catDescription:
      "ワレはネコ王だ。10歳のオスである。マタタビが大好きです。よろしくおねがいいたします！",
    catImage: image05,
  },
];