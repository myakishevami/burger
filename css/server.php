
<?php
/*$name = $_POST['user-name'];

$mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            </ul>
    </body>
    </html>';
    echo $mail_message;
 */


$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-srteet'];
$house = $_POST['user-house'];
$corp = $_POST['user-corp'];
$room = $_POST['user-room'];
$floor = $_POST['user-floor'];
$comment = $_POST['user-comment'];
$pay = $_POST['radio__order'];


$disturb = $_POST['user-call']; // 1 или null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
<html>
<head>
    <title>Заявка</title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        <li>Имя:' . $name . '</li>
        <li>Телефон: ' . $phone . '</li>
        <li>Улица: ' . $street . '</li>
        <li>Дом: ' . $house . '</li>
        <li>Корпус: ' . $corp . '</li>
        <li>Квартира: ' . $room . '</li>
        <li>Этаж: ' . $floor . '</li>
        <li>Комментарий к заказу: ' . $comment . '</li>
        <li>Оплата: ' . $pay . '</li>
        <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта <smi.tomsk@gmail.com>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('smi.tomsk@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>