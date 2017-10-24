(function () {
    window.App = window.App || {};

    // -------------------------------------------------------------------------
    // TopFive
    App.TopFive = {
        init: function init() {
        	this.getJsonData();
            this.fetchElements();
            this.bindUIEvents();
        },

        fetchElements: function fetchElements() {
            this.$list = $('.top-list');
        },

        getJsonData: function getJsonData() {
			this.$data = [
						{
						    "id": "76291",
						    "hits": 1922,
						    "url": "http://google.com",
						    "shortUrl": "http://chr.dc/aUx71"
						},
						{
						    "id": "70001",
						    "hits": 1519,
						    "url": "http://facebook.com",
						    "shortUrl": "http://chr.dc/qy61p"
						},
						{
						    "id": "19122",
						    "hits": 1320,
						    "url": "http://chaordic.com.br",
						    "shortUrl": "http://chr.dc/qy5k9"
						},
						{
						    "id": "23094",
						    "hits": 1003,
						    "url": "http://globo.com",
						    "shortUrl": "http://chr.dc/9dtr4"
						},
						{
						    "id": "55324",
						    "hits": 997,
						    "url": "http://youtube.com",
						    "shortUrl": "http://chr.dc/1w5tg"
						},
						{
						    "id": "66761",
						    "hits": 765,
						    "url": "http://terra.com.br",
						    "shortUrl": "http://chr.dc/u9jh3"
						},
						{
						    "id": "10743",
						    "hits": 722,
						    "url": "http://uol.com.br",
						    "shortUrl": "http://chr.dc/y81xc"
						},
						{
						    "id": "70931",
						    "hits": 487,
						    "url": "http://twitter.com",
						    "shortUrl": "http://chr.dc/7tmv1"
						},
						{
						    "id": "21220",
						    "hits": 311,
						    "url": "http://diariocatarinense.com.br",
						    "shortUrl": "http://chr.dc/87itr"
						},
						{
						    "id": "87112",
						    "hits": 130,
						    "url": "http://bing.com",
						    "shortUrl": "http://chr.dc/9opw2"
						}]
        },

        bindUIEvents: function bindUIEvents() {
            var _this = this;
            var html = "";
            this.$list.html('');

            $(this.$data).each(function(i,v) {
            	if(i < 5){
            		html += "<div class='top-five-item'><span class='text-url'>"+v.shortUrl+"</span><span class='text-clicks'>"+v.hits+"</span></div>";
            	}
            });
            this.$list.html(html);

            $("#btn-encurtar").on('click', this, function(e){
            	$("#input-url").fadeOut(300);
            	$("#btn-encurtar").fadeOut(300);
            	e.preventDefault();
            	var _this = this;
            	var input = $("#input-url").val();
            	var alpha = ['a','b','c','d','e','f','g','h','y','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

            	$(e.data.$data).each(function(a,b){
            		if(input === b.url){
            			$("#input-url").val(b.shortUrl);
            			$("#btn-encurtar").text('COPIAR');
            			return false;
            		}else {
            			var url = "http://chr.dc/";
            			for (i = 0; i < 6; i++) {
            				url += alpha[Math.floor(Math.random()*alpha.length)];
            			}

            			$("#input-url").val(url);
            			$("#btn-encurtar").text('COPIAR');
            			return false;
            		}
            	});
            	$("#input-url").fadeIn(300);
            	$("#btn-encurtar").fadeIn(300);
            });
        }
    };

    // inits
    App.TopFive.init();
})();