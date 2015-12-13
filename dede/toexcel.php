<?php
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/typelink.class.php');
require_once(DEDEINC.'/datalistcp.class.php');
require_once(DEDEADMIN.'/inc/inc_list_functions.php');

class Excel
{    
	private $head;     
	private $body;
	public function addHeader($arr){
		foreach($arr as $headVal){
			$headVal = $this->charset($headVal);
			$this->head .= "{$headVal}\t ";        
		}         
		$this->head .= "\n";     
	} 
	
 	public function addBody($arr){
		foreach($arr as $arrBody){
			foreach($arrBody as $bodyVal){
				$bodyVal = $this->charset($bodyVal);
				$this->body .= "{$bodyVal}\t ";             
			}             
			$this->body.= "\n";        
		}     
	} 
	
 	public function downLoad($filename=''){
		if(!$filename)
			$filename = date('YmdHis',time()).'.xls';
			header("Content-type:application/vnd.ms-excel");
			header("Content-Disposition:attachment;filename=$filename");
			header("Content-Type:charset=utf-8");
		if($this->head)
			echo $this->head;
		echo $this->body;     
	}
	public function charset($string){
		return mb_convert_encoding($string,'utf-8','auto');
	} 
}


$excel = new Excel();  
$excel->addHeader(array('title','source','pubtime','writer','body')); 
global $dsql; 
$sql="select dede_archives.title,dede_archives.source,dede_archives.pubdate,dede_archives.writer,dede_addonarticle.body from dede_archives,dede_addonarticle where dede_addonarticle.aid=dede_archives.id"; 
$dsql->SetQuery($sql);
$dsql->Execute();
while($row = $dsql->GetArray()){
	$row[body]=base64_encode($row[body]);
	$list[]=$row;
}
unset($row);
$excel->addBody($list);  
$excel->downLoad(); 