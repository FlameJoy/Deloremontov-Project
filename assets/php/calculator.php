<?php
  $subject = "Расчет сметы ремонта помещения";
  $renovationType = trim(strip_tags($_POST['renovationType']));
  $renovationType = trim(strip_tags($_POST['buildingType']));

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

  // Email
  $email = trim(strip_tags($_POST["email"]));
?>