---
theme : "White"
transition: "slide"
---

# 余白のCSS

---

## About Me

* **Otsuka Yuhi** on YUMEMI lnc.
* Skill
  * CSS Architecture
  * Semantic Markup
  * React
  * TypeScript
  * (AngularJS)
  * (A little bit) Kotlin
  * (Nanchatte) Scrum Master

---

## Index
* 余白はムズい
* コードで解説

---

## 余白はムズい

---

### 余白のムズさ
* 同じ UI だけど場所によって余白が違う
* 余白に規則性がない
* 要素を非表示にすると余白だけが残る
* ↑逆に余白がなくなって要素がくっつく
* ...etc

---

#### 同じ UI だけど場所によって余白が違う

```css
.button {
  margin-top: 16px; /* UI が上マージンを持っている */
  padding: 8px 16px;
  border: solid 1px #000;
  border-radius: 4px;
  font-size: 14px;
}
```

```css
.foo .button {
  margin-top: 0; /* 詳細度を上げて上書きする */
  margin-bottom: 14px; /* 下に余白がついたりもする */
}
```

```css
/* 結局戻ったりもする */
.foo .bar .button {
  margin-top: 16px;
  margin-bottom: 0;
}
```

---

そうならないために<br>
抑えておきたい**2つのルール**

---

1. margin と padding の使い分け
2. UI 自体はマージンを持たない

---

### margin と padding の使い分け

- 兄弟要素との距離は margin
- 子要素との距離は padding

---

### UI 自体はマージンを持たない

使うところで決める

---

## コードで解説

---

### もういちど！
* margin と padding の使い分け
  * 兄弟要素との距離は margin
  * 子要素との距離は padding
* UI 自体はマージンを持たない
  * 使うところで決める

---

## Thank You !!

Twitter<br>
<img src="./src/images/qr.png" alt="" width="250" >