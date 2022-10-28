<?php
    $dbServer = "localhost";
    $dbName = "2020_p1";
    $dbUsername = "root";
    $dbpassword = "";
    
    $lower_bound_height = $_POST["lower_bound"];
    $upper_bound_height = $_POST["upper_bound"];

    # connect with database
    $db = mysqli_connect($dbServer,$dbUsername,$dbpassword,$dbName);

    if(!$db){
        die("Connection failed: " . mysqli_connect_error());
    }    
    $sql = "DELETE FROM datas WHERE TRUE";
    mysqli_query($db, $sql);

    # insert data.txt into mysql database
    $data = fopen("data.txt", "r") or die("Unable to open file!");
    while(!feof($data)){
        $person = explode(" ", fgets($data));
        $person_height = (int)$person[0];
        $person_weight = (int)$person[1];
        $sql = "INSERT INTO datas (Height, Weight) VALUES ($person_height, $person_weight)";
        mysqli_query($db, $sql);
    }

    # user request to query
    $sql = "SELECT `Weight` FROM `datas` WHERE Height >= $lower_bound_height AND Height <= $upper_bound_height";
    $result = mysqli_query($db, $sql);
    
    if(mysqli_num_rows($result) > 0){
        // output data of each row
        $count = 0;
        $total_weight = 0;
        while($row = mysqli_fetch_assoc($result)){
            # echo $row["Weight"] . "<br>";
            $count++;
            $total_weight += $row["Weight"];
        }
        if($count > 1){    # A. more than one person case
            echo "The average weight is about " . $total_weight/$count + 0.2;
        } 
        else{   # B. only one person case
            echo "The average weight is about " . $total_weight+1;
        }
    }
    else{   # C. no one is within this query range
        echo "Nobody has a height in the specified range!";
    }

    fclose($data);

?>