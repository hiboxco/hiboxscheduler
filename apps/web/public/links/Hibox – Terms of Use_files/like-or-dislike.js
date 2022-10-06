
	function like(event){
		event.preventDefault();
		var has_id = jQuery(this).prev();
		var id = has_id.val();
		like_ajax(id);
	}
	
	function like_ajax(id){
		jQuery.ajax({
			type: "post",
			url: vortex_ajax_var.url,
			dataType: "json",
			data:{
				action:'vortex_system_like_button',
				post_id:id,
				nonce: vortex_ajax_var.nonce
			},
			success: function(response){
			if(response.likes != "exit"){
			
				function rating_system_add_new(){
					if(jQuery('#rating-system-limit').length){
						var limit = jQuery('#rating-system-limit').val();
						var avaible = jQuery('.rating-system-list li').length;
						if(avaible == limit){
							return false;
						}else return true;
					}
				}

				if(jQuery('.post-like-counter.'+id).length && jQuery('.post-like-text.'+id).length){
					var counter = jQuery('.post-like-counter.'+id);
					counter.text(response.likes);
					if(response.likes == '1'){
						var text = jQuery('.post-like-text.'+id);
						text.text(' '+response.singular);
					}
					if(response.likes > '1'){
						var text = jQuery('.post-like-text.'+id);
						text.text(' '+response.plural);
					}
				
				}
				
				if(response.likes == '0' && jQuery('li.'+id).length){
					jQuery('li.'+id).remove();
				}else if(!jQuery('li.'+id).length && jQuery('.widget_vortex_top_likes').length && !jQuery('.no-like').length  && !jQuery('.post-like-counter.'+id).length && !jQuery('.post-like-text.'+id).length && !response.likes == '0' && rating_system_add_new() ){
					jQuery('.widget_vortex_top_likes > ul').append('<li class="'+response.id+'"><a href="'+response.url+'" title="'+response.title+'">'+response.title+'</a><span class="post-like-counter '+response.id+'">'+" "+''+response.likes+'</span><span class="post-like-text">'+' '+response.singular+'</span></li>');
				}else if(!jQuery('li.'+id).length && jQuery('.widget_vortex_top_likes').length && jQuery('.no-like').length  && !jQuery('.post-like-counter.'+id).length && !jQuery('.post-like-text.'+id).length && !response.likes == '0' && rating_system_add_new()){
					jQuery('.widget_vortex_top_likes > ul').append('<li class="'+response.id+'"><a href="'+response.url+'" title="'+response.title+'">'+response.title+'</a></li>');
				}
				
					if(response.both == 'no'){
					var like = jQuery('.vortex-p-like-counter.'+id);
					like.text(response.likes);
					var like_toggle = jQuery('.vortex-p-like.'+id);
					like_toggle.toggleClass('vortex-p-like-active');
					}else{
						
					var dislike = jQuery('.vortex-p-dislike-counter.'+id);
					dislike.text(response.dislikes);
					
					var dislike_toggle = jQuery('.vortex-p-dislike.'+id);
					dislike_toggle.toggleClass('vortex-p-dislike-active');
					
					var like = jQuery('.vortex-p-like-counter.'+id);
					like.text(response.likes);
					
					var like_toggle = jQuery('.vortex-p-like.'+id);
					like_toggle.toggleClass('vortex-p-like-active');
					
					}
				}
			},
			complete:function(){
				jQuery(document.body).one('click.vortexlike','.vortex-p-like',like);
			}
		});
	}
	
	
	function dislike(event){
		event.preventDefault();
		var has_id = jQuery(this).prev();
		var id = has_id.val();
		dislike_ajax(id);
	}
	
	function dislike_ajax(id){
			jQuery.ajax({
			type: "post",
			url: vortex_ajax_var.url,
			dataType: "json",
			data:{
				action:'vortex_system_dislike_button',
				post_id:id,
				nonce: vortex_ajax_var.nonce
			},
			success: function(response){
				if(response.dislikes != "exit"){
			
					if(response.likes == '0' && jQuery('li.'+id).length){
						jQuery('li.'+id).remove();
					}
					
					if(response.both == 'no'){
					var dislike = jQuery('.vortex-p-dislike-counter.'+id);
					dislike.text(response.dislikes);
					var dislike_toggle = jQuery('.vortex-p-dislike.'+id);
					dislike_toggle.toggleClass('vortex-p-dislike-active');
					}else{
						
					var dislike = jQuery('.vortex-p-dislike-counter.'+id);
					dislike.text(response.dislikes);
					var dislike_toggle = jQuery('.vortex-p-dislike.'+id);
					dislike_toggle.toggleClass('vortex-p-dislike-active');
					
					var like = jQuery('.vortex-p-like-counter.'+id);
					like.text(response.likes);	
					var like_toggle = jQuery('.vortex-p-like.'+id);
					like_toggle.toggleClass('vortex-p-like-active');
					
					}
				}
			},
			complete:function(){
				jQuery(document.body).one('click.vortexdislike','.vortex-p-dislike',dislike);
			}
		});
	}

jQuery(document).ready(function() {
	if(Modernizr.touchevents){
		jQuery(document.body).on('mouseleave touchmove click', '.vortex-p-like', function( event ) {
			if(jQuery(this).hasClass('vortex-p-like-active')){
				var color = jQuery('.vortex-p-dislike').css('color');
				jQuery(this).css('color',color);
			}else{
				jQuery(this).removeAttr('style');
			};
		});
		jQuery(document.body).on('mouseleave touchmove click', '.vortex-p-dislike', function( event ) {
			if(jQuery(this).hasClass('vortex-p-dislike-active')){
				var color = jQuery('.vortex-p-like').css('color');
				jQuery(this).css('color',color);
			}else{
				jQuery(this).removeAttr('style');
			};
		});
	}
	jQuery(document.body).off('click.vortexlike','.vortex-p-like').one('click.vortexlike','.vortex-p-like',like);
	jQuery(document.body).off('click.vortexdislike','.vortex-p-dislike').one('click.vortexdislike','.vortex-p-dislike',dislike);
});