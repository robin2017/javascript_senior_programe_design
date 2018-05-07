var color = "blue";
function changeColor() {
    var anotherColor = "red";
    function swapColors() {
        var tmpColor = anotherColor;
        anotherColor = color;
        color = tmpColor;
        //这里可以访问到color,anotherColor,tmpColor
    }
    //这里可以访问到color,anotherColor
    swapColors();
}
changeColor();


