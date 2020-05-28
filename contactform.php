<?php 
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "daniel@palmtreedev.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have recieved an e-mail from ".$name."<".$mailFrom."> .\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        echo "Mail Sent. Thank you " . $name . ", I will reply to your inquiry as soon as possible";
    }
?>
