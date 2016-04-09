# jquery.listtotabs
JQuery Plug-in to quickly convert a simple list into tabs (only dependancy is JQuery)

Demo available here: [ListToTabs JQuery Plugin](http://davidjohnfarmer.co.uk/jquery-plugins/).

Example use(s):

JQUERY: 
```
$( document ).ready(function() {

	$('.list-to-tabs').listtoTabs();

});
```

HTML:
```
<ul class="list-to-tabs"> 
	<li> 
		<h6>Tab Link 1</h6> 
		<p>The tab content</p> 
	</li> 
	<li> 
		<h6>Tab Link 2</h6> 
		<p>The tab content</p> 
	</li> 
</ul> 
```

CSS:
```
ul.list-to-tabs {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
	list-style: none;
}
ul.list-to-tabs li {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

ul.list-to-tabs li h6 {
	font-size: 18px;
	margin: 0px 0px 0px 0px;
	padding: 0px 0px 0px 0px;
}

.list-to-tabs-trigger {
	display: inline-block;
	background-color: #90708C;
	color: #fff;
	text-decoration: none;
	padding: 2px 10px 2px 10px;
	margin-right: 10px;
	-webkit-box-shadow: 4px 4px 5px -4px rgba(0,0,0,0.75);
	-moz-box-shadow: 4px 4px 5px -4px rgba(0,0,0,0.75);
	box-shadow: 4px 4px 5px -4px rgba(0,0,0,0.75);
}
.list-to-tabs-trigger.active {
	background-color: #666;
}
```
