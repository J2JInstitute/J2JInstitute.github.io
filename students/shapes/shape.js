const formulaSquare = document.getElementById("area-formula-square");
    const formulaRectangel = document.getElementById("area-formula-rectangle");
    const formulaTriangle = document.getElementById("area-formula-triangle");
    const formulaCircle = document.getElementById("area-formula-circle");
    const formularhombus = document.getElementById("area-formula-rhombus");

    formulaSquare.style.display='none';
        formulaRectangel.style.display='none';
        formulaTriangle.style.display='none';
        formulaCircle.style.display='none';
        formularhombus.style.display='none';
    

    function showCircle() {
      var circle = document.getElementById('circle');
      circle.style.display = 'block';
      rhombus.style.display='none';
      triangle.style.display='none';
      rectangle.style.display='none';
      square.style.display='none';
      
      formulaSquare.style.display='none';
    formulaRectangel.style.display='none';
    formulaTriangle.style.display='none';
    formulaCircle.style.display='';
    formularhombus.style.display='none';

    }

    function showSquare() {
      var square = document.getElementById('square');
        square.style.display = 'block';
        circle.style.display='none';
        rhombus.style.display='none';
        triangle.style.display='none';
        rectangle.style.display='none';

        formulaSquare.style.display='';
        formulaRectangel.style.display='none';
        formulaTriangle.style.display='none';
        formulaCircle.style.display='none';
        formularhombus.style.display='none';

    }

    function showTriangle() {
      var triangle = document.getElementById('triangle');
        triangle.style.display = 'grid';
        rectangle.style.display='none';
        square.style.display='none';
        circle.style.display='none';
        rhombus.style.display='none';

        formulaSquare.style.display='none';
        formulaRectangel.style.display='none';
        formulaTriangle.style.display='';
        formulaCircle.style.display='none';
        formularhombus.style.display='none';
    }

    function showRectangle() {
      var rectangle = document.getElementById('rectangle');
        rectangle.style.display = 'block';
        circle.style.display='none';
        rhombus.style.display='none';
        triangle.style.display='none';
        square.style.display='none';

        formulaSquare.style.display='none';
        formulaRectangel.style.display='';
        formulaTriangle.style.display='none';
        formulaCircle.style.display='none';
        formularhombus.style.display='none';

    }

    function showRhombus() {
      var rhombus = document.getElementById('rhombus');
        rhombus.style.display = 'block';
        rectangle.style.display = 'none';
        circle.style.display='none';
        triangle.style.display='none';
        square.style.display='none';

        formulaSquare.style.display='none';
        formulaRectangel.style.display='none';
        formulaTriangle.style.display='none';
        formulaCircle.style.display='none';
        formularhombus.style.display='';

    }