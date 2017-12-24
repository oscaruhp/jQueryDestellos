(function($) {
	$.fn.extend({
		Destellos: function(opciones) {
    var Selector=this;
            defaults = {
				Luces: [
                    {
					"x": "396",
					"y": "113", 
                    "velocidad":"2s",
                    "Imagen":"estrella.png",
				    }
                    ]
			};
    opciones = $.extend({}, defaults, opciones);
    $(document).ready(function() {
           var UnicoID = Date.now();
         $(Selector).attr("class","Selector"+UnicoID);
        $(Selector).before('<style>.Selector'+UnicoID+'{position:absolute;margin:0 auto;}</style>');
        var contadorLuces=0;
        $.each(opciones.Luces, function(dato,ndato) {
                UnicoIDLuz = contadorLuces+"_"+Date.now();
            $(Selector).before('<style>.Selector'+UnicoID+' .-ad'+UnicoIDLuz+'{ position:absolute;right: '+ndato.x+'px; top: '+ndato.y+'px; animation: EfectoDestello '+ndato.velocidad+' infinite; -webkit-animation: EfectoDestello '+ndato.velocidad+' infinite;}</style>');
            
            $(Selector).prepend('<img src="'+ndato.Imagen+'" class="-ad'+UnicoIDLuz+'">');
            contadorLuces++;
        });
    
    });
        }
     });   
})(jQuery);