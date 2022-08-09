<?php

   $user_name = $_POST['user_name'];
   $user_email = $_POST['user_email'];
   $user_tel = $_POST['user_tel'];
   $user_message = $_POST['user_message'];

   // Connexion à la BDD
   $connect = new mysqli('3306', 'mika','luffy', 'clients monkeysdev' );
   if($connect->connect_error){
    die('connection failed : '.$connect->connect_error)
   }else {
        $stmt = $connect->prepare("insert into contact(user_name, user_email, user_tel, user_message)
            values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssi", $user_name, $user_email, $user_tel, $user_message);
        echo "message envoyé";
        $stmt->close();
        $connect->close();
   }
?>