---
title: Planning Document
layout: no-style
permalink: /planning-1/
---

# Planning 1 

*Numbering these documents as I'm sure I'll burn through them fairly quickly.*

### Traditional Tags:

1. `<head>`
2. `<title>`
3. `<body>`
4. `<h1>` to `<h6>`
5. `<p></p>`
6. `<span>`
7. `<em>`
8. `<strong>`
9. `<a href="#"></a>`
10. `<ol></ol>`
11. `<ul></ul>`
12. `<li></li>`

### Semantic Tags:

1. `<header></header>`
2. `<nav></nav>`
3. `<main></main>`
4. `<aside></aside>`
5. `<footer></footer>`
6. `<section></section>`
7. `<article></article>`

### Empty (Non-Container) Tags

1. `<br />`
2. `<img src="link" alt="alternate text" />`

### Tables

1. `<table></table>`
2. `<tr></tr>` - table row
3. `<th></th>` - sample attributes = `scope='row'`, when making a table, use this tag to differentiate the first row/column of cells as heading cells for all other cells in same column or row. Browsers show this lil dude centered and bold in the table cell. `scope` defines whether it's a row header or a column header.
4. `<td></td>` - table data cell
5. `colspan='number'`, `rowspan='number'`: use with `<th>` or `<td>` cells; spans cells across multiple rows