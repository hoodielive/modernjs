const log = console.log

let getSiblings = function(e) {
    let siblings = []

    if (!e.parentNode) {
        return siblings;
    }

    let sibling = e.parentNode.firstChild

    while(sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

let siblings = getSiblings(document.querySelector('.current'))
siblingText = siblings.map(e => e.innerHTML)
log(siblingText)
