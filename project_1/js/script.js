const bubble = document.getElementById("bubble-img");
const changeBubbleImageBtn = document.getElementById("change-bubble");
let bubbleFlag = false;

const changeBubble = () => {
  if (bubbleFlag) {
    bubble.setAttribute("src", "../images/bulboff.gif");
    bubbleFlag = false;
  } else {
    bubble.setAttribute("src", "../images/bulbon.gif");
    bubbleFlag = true;
  }
};

changeBubbleImageBtn.addEventListener("click", changeBubble);
