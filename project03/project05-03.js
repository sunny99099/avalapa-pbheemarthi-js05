"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Adithya and pranay
      Date:   09/26/2024  

      Filename: project05-03.js
*/ 
let sourceDoc = document.getElementById('source_doc');
let toc = document.getElementById('toc');
let headingCount = 1;
const headingTag = "H2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
    if (n.nodeName === headingTag) {
        let anchor = document.createElement('a');
        anchor.setAttribute('name', 'doclink' + headingCount);
        n.insertBefore(anchor, n.firstChild);

        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = "#doclink" + headingCount; 
        link.textContent = n.textContent;

        listItem.appendChild(link);
        toc.appendChild(listItem);
        headingCount++;
    }
}

