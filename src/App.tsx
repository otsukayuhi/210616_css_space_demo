import React from "react";
import { Cat } from "./components/Cat";
import { Title } from "./components/Title";
// ホントは非同期とかで取得
import { catList } from "./data";

import 'modern-css-reset';
import './styles/base.css'
import './styles/util.css'
import "./styles/App.css";

const App: React.FC = () => (
  <div className="app">
    {/* Pears って洋梨やん。。。まあいいか */}
    <Title marginBottom="24px" text="Neko Pears"/>
    <main className="app_cat-list">
      {catList.map((props, index) => (
        <Cat key={index} {...props} />
      ))}
    </main>
    {/* 余白のルールを守るために、ユーティリティークラスを使ってもいいかもです */}
    <footer className="app_footer mt-32">copyright I'm cats .inc</footer>
  </div>
);

export default App;
