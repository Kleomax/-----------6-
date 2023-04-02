<meta charset="utf-8">
<?php 
$message .= "Номер телефона: {$_POST['phone']}" <br>;
$message .= "E-mail: {$_POST['email']}";
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'daniilbelkin8';
$mail->Password = 'SYDz5Wt4wqYssdv2XehE';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = 'daniilbelkin8@mail.ru';
$mail->FromName = 'заявка';
$mail->addAddress('daniilbelkin8@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'заявка';
$mail->Body = $message;
if( $mail->send() ){
     echo '<h1 style="color: green; text-align: center;">Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время!</h1>';
     }else{
     echo '<p style="color: red;">Ошибка!</p>';
     }
      ?>
