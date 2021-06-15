import React from "react";
import "../styles/Title.css";

type TitleProps = {
  /** タイトルテキスト */
  text: string;
  /**
   * タイトル下の余白
   * @note ストリングリテラル型にして、親から指定するアイデアもよさそう
   */
  marginBottom: '24px' | '32px';
};

export const Title: React.FC<TitleProps> = ({ text, marginBottom }) => (
  <h1 className="title" style={{ marginBottom }}>
    <div>{text}</div>
  </h1>
);
