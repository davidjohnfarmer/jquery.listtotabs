/*! ListToTabs for JQuery v1.00 BETA
 * http://www.davidjohnfarmer.co.uk/jquery-plugins/listtotabs/  
 * Do not remove any of this notice (you're welcome to use this code in commercial projects)
 * Copyright (c) 2016 David John Farmer www.davidjohnfarmer.co.uk
 * Licensed under the MIT license */

(function ( $ ) {

    var tabset = 0;

    $.fn.listtoTabs = function(options) {
 
        // DEFAULT OPTIONS 
        var settings = $.extend({

        }, options );
 
        var $this = $(this);

        $(document).on("click", ".list-to-tabs-trigger", function(event) {

            event.preventDefault();

            $(this).parent().parent().find('li.list-to-tabs-list-item').hide();
            $(this).parent().find('.list-to-tabs-trigger').removeClass('active');

            var tabid = $(this).attr('href');
            $(tabid).show();
            $(this).addClass('active');

        });
        

        var addLabels = function(obj,tabset) {

            var itemid = 0;
            var tabcontrolshtml = "";

            $(obj).children('li').each(function(i,listobj) {
                var label = $(listobj).find('h6').html();
                $(listobj).find('h6').hide();
                var linkclass = 'listtotabs-'+tabset+'-li-'+itemid;

                $(listobj).addClass('list-to-tabs-list-item');

                $(listobj).attr('id',linkclass);

                $(listobj).hide();

                tabcontrolshtml += "<a href='#"+linkclass+"' class='list-to-tabs-trigger'>"+label+"</a>";
                itemid++;
            });

            return tabcontrolshtml;
        }
       
        return this.each(function(i,obj) {

            tabset++;

            var tabcontrolshtml = addLabels(obj,tabset);
            $(obj).wrap("<div class='list-to-tabs-wrap'></div>");
            $('<div>'+tabcontrolshtml+'</div>').insertBefore(obj);

            $(obj).parent().find('.list-to-tabs-trigger:first').trigger('click'); 

        });

    };

}( jQuery ));