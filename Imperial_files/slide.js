var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

			$(document).ready(function() {

				$('a.panel').click(function () {

					$('a.panel').removeClass('selected');
					$(this).addClass('selected');
		
					current = $(this);
		
					$('#wrapper').scrollTo($(this).attr('href'), 800);		
			
					return false;
				});

				$(window).resize(function () {
					resizePanel();
				});
	
			});

}
/*
     FILE ARCHIVED ON 21:27:01 Apr 05, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:56:50 Mar 03, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 482.798
  esindex: 0.015
  RedisCDXSource: 55.079
  exclusion.robots.policy: 0.16
  captures_list: 222.094
  PetaboxLoader3.resolve: 226.649
  LoadShardBlock: 142.57 (3)
  exclusion.robots: 0.174
  PetaboxLoader3.datanode: 314.534 (4)
  CDXLines.iter: 20.437 (3)
*/