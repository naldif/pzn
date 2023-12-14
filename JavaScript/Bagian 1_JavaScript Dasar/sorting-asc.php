<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$myArray = [5, 3, 8, 2, 1, 4];
$z = [];

foreach ($myArray as $value) {
    array_push($z, ASC($value));
}

echo "[" . implode(", ", $z) . "]";
?>
</body>
</html>