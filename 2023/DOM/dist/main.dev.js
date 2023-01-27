"use strict";

var log = console.log;

var getSiblings = function getSiblings(e) {
  var siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  var sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

var siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(function (e) {
  return e.innerHTML;
});
log(siblingText);