export function countWordsInDiv(divId: string) {
  const divElement = document.getElementById(divId); // Get the div element by its ID
  if (!divElement) { return -1}
  let wordCount = 0;

  // Helper function to count words in a string
  function countWords(str: string) {
    const words = str.trim().split(/\s+/); // Split the string by whitespace
    return words.length;
  }

  // Recursively traverse the child nodes
  function traverseNodes(node: any) {
    if (node.nodeType === Node.TEXT_NODE) {
      // If the node is a text node, count its words
      wordCount += countWords(node.textContent);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // If the node is an element node, traverse its child nodes
      const children = node.childNodes;
      for (let i = 0; i < children.length; i++) {
        traverseNodes(children[i]);
      }
    }
  }

  // Start traversing the child nodes of the div element
  const childNodes = divElement.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    traverseNodes(childNodes[i]);
  }

  return wordCount;
}

export function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
