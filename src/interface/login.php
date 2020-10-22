<?php
    include './model/_connect_2.php';

    $uname = $_GET['username'];
    $upass = $_GET['password'];

    $sql = "SELECT * FROM `info` WHERE `username`='$uname' AND `userpassword` = '$upass'";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);
    mysqli_close($conn);

    if($row){
        echo json_encode(array("code"=>1,"msg"=>"登录成功"));
    }else{
        echo json_encode(array("code"=>0,"msg"=>"服务器错误"));
    }
?>