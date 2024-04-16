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


export function generateGradientColors(hex:string, amount = 20) {
    // Helper function to convert a hex color to RGB
    function hexToRgb(hex:string) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    // Helper function to convert RGB to hex
    function rgbToHex(r:number, g:number, b:number) {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    }

    // Helper function to clamp the values between 0 and 255
    function clamp(value:number) {
        return Math.max(0, Math.min(255, value));
    }

    // Convert the original color to RGB
    let [r, g, b] = hexToRgb(hex);

    // Generate a lighter color
    let lighter = rgbToHex(
        clamp(r + amount),
        clamp(g + amount),
        clamp(b + amount)
    );

    // Generate a darker color
    let darker = rgbToHex(
        clamp(r - amount),
        clamp(g - amount),
        clamp(b - amount)
    );

    return {
        original: hex,
        lighter: lighter,
        darker: darker
    };
}

// DATE HELPER FUNCTIONS TO BE USED IN BLOG POSTS
  function ordinalSuffix(day: number): string {
    if (day > 3 && day < 21) return day + 'th'; // covers 4th to 20th
    switch (day % 10) {
      case 1:  return day + "st";
      case 2:  return day + "nd";
      case 3:  return day + "rd";
      default: return day + "th";
    }
  }


export function formatDate(date: Date): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    let year = date.getFullYear();

    return `${monthName} ${ordinalSuffix(day)}, ${year}`;
}

