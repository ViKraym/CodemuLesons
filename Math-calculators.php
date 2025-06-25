<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style/figure-calc.css">
</head>
<body>
     <?php include "header.php"; ?>
    <main>
        <section class="area-perimeter-figure">
            <h1>Найти корни квадратного уравнения</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="numberA">
                <input type="text" placeholder="b" class="number input-box" id="numberB">
                <input type="text" placeholder="c" class="number input-box" id="numberC">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot"  href="#">Расчитать</button>
            </div>
            <h6>Корни</h6>
            <div class="perimeter" id="root"></div>
            <div class="perimeter" id="root2"></div>
            
        </section>

        <section class="area-perimeter-figure">
            <h1>Тройка Пифагора</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="numberA1">
                <input type="text" placeholder="b" class="number input-box" id="numberB1">
                <input type="text" placeholder="c" class="number input-box" id="numberC1">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot1"  href="#">Расчитать</button>
            </div>
            <h6>Наибольшее число</h6>
            <div class="perimeter" id="root1"></div>
            <h6>Числа являются тройкой Пифагора</h6>
            <div class="perimeter" id="root21"></div>
            
        </section>

    
 



    </main>
        <script src="scripts/math-calc.js" defer>
            
        </script>
        
</body>
</html>