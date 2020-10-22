<?php
require('./_connect_2.php');

//书写sql语句
$sql = "CREATE TABLE info (
			username VARCHAR(300) NOT NULL,
			userpassword VARCHAR(30) NOT NULL
			
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>