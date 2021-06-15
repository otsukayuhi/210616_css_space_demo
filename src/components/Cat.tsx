import React from "react";
import "../styles/Cat.css";

export type CatProps = {
  /** 表示フラグ */
  isVisible?: boolean;
  /** ねこの名前 */
  catName: string;
  /** ねこの説明 */
  catDescription: string;
  /** ねこの画像 */
  catImage: string;
};

export const Cat: React.FC<CatProps> = ({
  isVisible = true,
  catName,
  catDescription,
  catImage,
}) => {
  if (!isVisible) return null;

  return (
    <button className="cat" type="button">
      <img
        className="cat__image"
        src={catImage}
        width="400"
        height="400"
        alt=""
      />
      <dl className="cat__detail">
        {/* 余白のルールを守るために、ユーティリティークラスを使ってもいいかもです */}
        <dt className="mb-8">{catName}</dt>
        <dd>{catDescription}</dd>
      </dl>
    </button>
  );
};
