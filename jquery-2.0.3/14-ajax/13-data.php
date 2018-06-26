<?php  
	// echo $_GET["callback"]."({"name": "hello"})";
	// echo "hello";
	
	/**
	* 
	*/
	class Deno 
	{
		public $name = "hello";
	};
	$data = new Deno();
	echo $_GET['callback']."(".json_encode($data).")";	
?>