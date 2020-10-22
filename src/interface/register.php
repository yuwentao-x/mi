<?php
    include './model/_connect_2.php';

    $uname = $_GET['username'];
    $upass = $_GET['password'];

    $sql = "SELECT * FROM `info` WHERE `username`='$uname'";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);

    if($row){
        echo json_encode(array("code"=>2,"msg"=>"已存在账户，请您直接登录"));
    }else {
        $sql = "INSERT INTO `info` VALUES ('$uname','$upass')";
        $res = mysqli_query($conn,$sql);
        mysqli_close($conn);

        if($res){
            echo json_encode(array("code"=>1,"msg"=>"账户创建成功"));
        }else{
            echo json_encode(array("code"=>0,"msg"=>"服务器错误"));
        }
    }

    
?>