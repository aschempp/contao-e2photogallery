
<div class="<?php echo $this->class; ?> block"<?php echo $this->cssID; ?><?php if ($this->style): ?> style="<?php echo $this->style; ?>"<?php endif; ?>>
<?php if ($this->headline): ?>

<<?php echo $this->hl; ?>><?php echo $this->headline; ?></<?php echo $this->hl; ?>>
<?php endif; ?>

<div class="e2_photo_gallery">
 <div class="bd">
  <div class="c">
   <div class="s">

    <!-- Gallery -->

		  <div id="gallery" align="center">
		  <!--Main Image Here-->
		  <div id="main_image_wrapper">
			
			  <div id="imgloader"> </div>
						 <div id="pn_overlay">
				<a href='javascript:e2photogallery_<?php echo $this->id; ?>.previmage();' id='prev' class=".toolTip" tooltitle="Previous Image" ></a>
				<a href='javascript:e2photogallery_<?php echo $this->id; ?>.nextimage();' id='next' tooltitle="Next Image"></a>			 </div>
		  </div>
		  <div align="center" class="spacing"> </div>
		  <!--End Main Image-->
		  <div align="center" class="spacing"> </div>
		  <div id="thumbhide">
		   <div id="thumbbox">
			<div id="thumb_container">
			  <div id="thumbgall">
				<div id="thumbs">
				  <div id="widthbox">
<?php foreach( $this->thumbs as $i => $thumb ): ?>
				  	<a href="#" onclick="e2photogallery_<?php echo $this->id; ?>.moveimage(<?php echo $i; ?>);return false;"><img src="<?php echo $thumb['src']; ?>" alt="<?php echo $thumb['alt']; ?>" title="" tooltitle="" class="toolTipImg" /></a>
<?php endforeach; ?>
				  </div>
				</div>
			  </div>
			</div>
			<div id="back">
				<div id="leftmore"><ul><li><a href="javascript:e2photogallery_<?php echo $this->id; ?>.movethumbs('minus');"><img src="system/modules/e2photogallery/html/rsrc/buttonblank.gif" width="15" height="115" border="0" /></a></li></ul></div>
			</div>
			<div id="more">
				<div id="rightmore"><ul><li><a href="javascript:e2photogallery_<?php echo $this->id; ?>.movethumbs('plus');"><img src="system/modules/e2photogallery/html/rsrc/buttonblank.gif" width="15" height="115" border="0" /></a></li></ul></div>
			</div>
			</div>
		  </div>
		</div>

    <!-- end Gallery -->

   </div>
  </div>
 </div>
</div>


<script type="text/javascript">
<!--//--><![CDATA[//><!--
var e2photogallery_<?php echo $this->id; ?>;
window.addEvent('domready', function() {
	
	e2photogallery_<?php echo $this->id; ?> = new e2PhotoGallery({
		images: [
<?php foreach( $this->images as $i => $image ): ?>
			['<?php echo $image['src']; ?>', '<?php echo $image['width']; ?>', '<?php echo $image['height']; ?>']<?php if($i+1<count($this->images)) echo ', '; ?>
		
<?php endforeach; ?>
		]
	});
	
});
//--><!]]>
</script>

</div>
