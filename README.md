# [debugjo.github.io](https://debugjo.github.io/)

List of supported languages and lexers : <https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers>

```md

파일명: yyyy-mm-dd-번호.md

excerpt_separator: <!--more-->

---
title: 제목
author: msj
categories: [Blogging, Tutorial]
tags: [rust, C#]
---

### Category

[C#ㆍ.NETㆍAvalonia, C#]
[C#ㆍ.NETㆍAvalonia, .NET]
[C#ㆍ.NETㆍAvalonia, Avalonia]

[C++ㆍQTㆍC3, C++]
[C++ㆍQTㆍC3, QT]
[C++ㆍQTㆍC3, C3] 

[DatabaseㆍModeling, Database]
[DatabaseㆍModeling, Modeling]
[DatabaseㆍModeling, SQL]

[RustㆍZigㆍGo, Rust]
[RustㆍZigㆍGo, Zig]
[RustㆍZigㆍGo, Go]

[Liberal Artsㆍφιλοσοφία, Arts]
[Liberal Artsㆍφιλοσοφία, Philo]
[Liberal Artsㆍφιλοσοφία, Insights]

H1: 22px

H2: 20px

H3: 18px

H4: 16px

H5: 15px

H6: 14x

P: 15px

이미지: 732 * 2 = 1464 : ![redox](/upload/redox.jpg)

테이블:
| A | B | C | D |
|:-:|:-:|:-:|:-:|
| 1 | a | b | c |
| 2 | a | b | c |
| 3 | a | b | c |

# 참고 사이트: <https://github.com/cotes2020/jekyll-theme-chirpy>

## H2 — heading
{: data-toc-skip=''}
{: data-toc-skip='' .mt-4 .mb-0 }

### Ordered list

1. Firstly
2. Secondly
3. Thirdly

### Unordered list

- Chapter
  - Section
    - Paragraph

### ToDo list

- [ ] Job
  - [x] Step 1
  - [x] Step 2
  - [ ] Step 3

### Description list

Sun
: the star around which the earth orbits

Moon
: the natural satellite of the earth, visible by reflected light from the sun

## Block Quote

> This line shows the _block quote_.

## Prompts

> An example showing the `tip` type prompt.
{: .prompt-tip }

> An example showing the `info` type prompt.
{: .prompt-info }

> An example showing the `warning` type prompt.
{: .prompt-warning }

> An example showing the `danger` type prompt.
{: .prompt-danger }

## Footnote

Clicking the hook will locate the footnote[^footnote], and here is another footnote[^fn-nth-2].

## Inline code

This is an example of `Inline Code`.

## Filepath

Here is the `/path/to/the/file.extend`{: .filepath}.

```

### Mathematics

```
$$
\begin{equation}
  \sum_{n=1}^\infty 1/n^2 = \frac{\pi^2}{6}
  \label{eq:series}
\end{equation}
$$

We can reference the equation as \eqref{eq:series}.

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

## Text and Typography : <https://chirpy.cotes.page/posts/text-and-typography>

### Mermaid SVG
(mermaid)
```
 gantt
  title  Adding GANTT diagram functionality to mermaid
  apple :a, 2017-07-20, 1w
  banana :crit, b, 2017-07-23, 1d
  cherry :active, c, after b a, 1d
```

### Images

```
![Desktop View](/posts/20190808/mockup.png){: width="972" height="589" }
```

### Video

```
{% include embed/youtube.html id='Balreaj8Yqs' %}
```

### Reference

```
[^footnote]: The footnote source
[^fn-nth-2]: The 2nd footnote source
```
