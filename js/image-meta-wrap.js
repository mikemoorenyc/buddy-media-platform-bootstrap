<script type="text/javascript">

$(document).ready(function(){

  $('.modulePhoto .title').each(function() { 
      $(this).nextAll().andSelf().wrapAll('<div class="meta-wrap" />')
  });

});

</script>
