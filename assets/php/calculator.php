<?php
  $subject = "Расчет сметы ремонта помещения";
  $renovationType = trim(strip_tags($_POST['renovationType']));
  $buildingType = trim(strip_tags($_POST['buildingType']));

  // Walls
  $wallPlaster = trim(strip_tags($_POST['wallPlaster']));
  $wallDrywall = trim(strip_tags($_POST['wallDrywall']));
  $wallWallpaper = trim(strip_tags($_POST['wallWallpaper']));

  // Floors
  $floorLeveling = trim(strip_tags($_POST['floorLeveling']));
  $floorLaminate = trim(strip_tags($_POST['floorLaminate']));
  $floorTile = trim(strip_tags($_POST['floorTile']));

  // Ceilings
  $ceilingPlaster = trim(strip_tags($_POST['ceilingPlaster']));
  $ceilingDrywall = trim(strip_tags($_POST['ceilingDrywall']));
  $stretchCeiling = trim(strip_tags($_POST['stretchCeiling']));

  // Additional options
  $electrics = trim(strip_tags($_POST['electrics']));
  $waterSupplySystem = trim(strip_tags($_POST['waterSupplySystem']));
  $heatingSystem = trim(strip_tags($_POST['heatingSystem']));
  
  $replHeatingRadiators = trim(strip_tags($_POST['replHeatingRadiators']));
  $replWindows = trim(strip_tags($_POST['replWindows']));

  // Message
  $msg = "Рассчёт сметы проекта:\n" ."Тип ремонта: $renovationType\n" ."Вид недвижимости: $buildingType\n" ."Ваш email: $email\n";

  // Email
  $email = trim(strip_tags($_POST["email"]));

  // Headers
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: Ваше_имя <ваш_email>" . "\r\n";
  $headers .= "Bcc: ваш_email". "\r\n";

  mail($email, $subject, $msg, $headers); //отправляет получателю на емайл значения переменных
  header("Location:https://deloremontov.ru/");
?>