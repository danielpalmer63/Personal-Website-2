<?php 
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];

        $mailTo = "daniel@palmtreedev.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    }
?>
