const bubble = document.getElementById("bubble-img");
const changeBubbleImageBtn = document.getElementById("change-bubble");
let bubbleFlag = false;

const changeBubble = () => {
  if (bubbleFlag) {
    bubble.setAttribute("src", "../images/bulboff.gif");
    changeBubbleImageBtn.innerHTML = "Turn On";
    bubbleFlag = false;
  } else {
    bubble.setAttribute("src", "../images/bulbon.gif");
    changeBubbleImageBtn.innerHTML = "Turn Off";
    bubbleFlag = true;
  }
};

changeBubbleImageBtn.addEventListener("click", changeBubble);
