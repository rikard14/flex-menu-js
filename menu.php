<?php
	function getMenuHtml() 
	{
		$htmlMenu = "<nav class='horizontal'>";
		for($i = 1; $i < 5; ++$i)
		{
			$htmlMenu .= "<a href='sida-" . $i . ".php'>sida ". $i . "</a>";
		}
		$htmlMenu .= "</nav>";
		return $htmlMenu;
	}
?>

