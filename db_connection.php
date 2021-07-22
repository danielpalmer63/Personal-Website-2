<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "dpalmer63@verizon.net";
 $dbpass = "Chelmsford45$";
 $db = "dpalmer6_blogPosts";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
?>