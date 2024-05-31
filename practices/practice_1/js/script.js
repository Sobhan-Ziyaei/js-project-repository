let grade = prompt("Enter your grade: ");

switch (grade) {
    case "20":
    case "19":
    case "18":
        alert("Your level is A");
        break;
    case "17":
    case "16":
    case "15":
        alert("Your level is B");
        break;
    case "14":
    case "13":
    case "12":
        alert("Your level is C");
        break;
    default:
        alert("شما مشروط شده اید");
        break;
}