
var e2PhotoGallery = new Class({

	Implements: Options,
	
	options: {
		currentpos: 0,
		maxthumbvisible: 5, //Define how many thumbnails will be visible at one time in the thumbbox--for now this should only be 3 since it's actually the css that controls the size of the viewable box
		preloadimg: false,
		myloadedimage: [1],
		images: [],
		transspeed: 500,
		fadespeed: 300,
		current_imgid: 0,
		current_thumbid: 0
	},
	
	initialize: function(options) {
		
		this.setOptions(options);
		
		if (this.options.preloadimg) {
			for (x=0; x<this.options.images.length; x++){
				var myimage=new Image()
				myimage.src=this.options.images[x][0]
			}
		}

		new Fx.Morph('main_image_wrapper', {
			duration: this.options.transspeed,
			onComplete: function() {
				this.loadfirstimage();
			}.bind(this)
		}).start({
			'width':  this.options.images[0][1],
			'height': this.options.images[0][2]	
		});
	},
	
	modifyimage: function(loadarea, img_id) {
	
		if (this.options.myloadedimage[img_id]==null) {	
			new Asset.image(this.options.images[img_id][0], {
				onload: this.loadimagenow(loadarea, img_id)
			});
		} else {
			this.loadimagenow(loadarea, img_id);
		}
		
	},
	
	loadimagenow: function(loadarea, img_id) {
		if(this.options.current_imgid!=img_id) {
			$(loadarea).set('html', ('<img src="'+this.options.images[img_id][0]+'" border="0" id="'+img_id+'" />'));
			new Fx.Tween(loadarea, {property:'opacity', duration:this.options.fadespeed}).set(0).start(0,1);
			this.options.current_imgid=img_id;
			this.options.myloadedimage[img_id]=1;
		}
	},

	mm_shl: function() { //v6.0
		var obj,args=arguments;
		if ((obj=this.MM_findObj(args[0]))!=null) {
			if (obj.style) {
				obj=obj.style;
			}
			obj.visibility=args[1];
		}
	},
	
	MM_findObj: function(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=this.MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	},
	
	movethumbs: function(way) {
		if(way=='minus'){
			this.options.current_thumbid -= 1;
		} else if(way=='plus') {
			this.options.current_thumbid += 1;
		}
		
		new Fx.Morph('thumbgall', {
			duration: this.options.transspeed, 
			transition: Fx.Transitions.quadOut
		}).start({ 
			left: -$$('#thumbgall a')[this.options.current_thumbid].getCoordinates($('thumbgall')).left
		});
		
		if ( this.options.current_thumbid == 0 ) {
			this.mm_shl('back','hidden');
			this.mm_shl('more','visible');
		} else if ( this.options.current_thumbid < this.options.images.length - this.options.maxthumbvisible ) {
			this.mm_shl('back','visible');
			this.mm_shl('more','visible');
		} else {
			this.mm_shl('back','visible');
			this.mm_shl('more','hidden');
		}
	},
	
	
	moveimage: function(img_id) {
	
		if (img_id == this.options.current_imgid)
			return;
	
		var width = this.options.images[img_id][1];
		var height = this.options.images[img_id][2];
		
		if ( img_id < 1 ) {
			this.mm_shl('prev','hidden');
			this.mm_shl('next','visible');
		} else if ( img_id < (Number(this.options.images.length)-1) ) {
			this.mm_shl('prev','visible');
			this.mm_shl('next','visible');
		} else {
			this.mm_shl('prev','visible');
			this.mm_shl('next','hidden');
		}
	
		new Fx.Tween('imgloader', {
			property:'opacity', 
			duration:this.options.fadespeed, 
			onComplete: function() {
				new Fx.Morph('main_image_wrapper', {
					duration:this.options.transspeed, 
					onComplete: function() {
						this.modifyimage('imgloader', img_id); 
						this.options.current_imgid = img_id;
					}.bind(this) 
				}).start({'height': [this.options.images[this.options.current_imgid][2],this.options.images[img_id][2]],'width': [this.options.images[this.options.current_imgid][1],this.options.images[img_id][1]]})
			}.bind(this)
		}).start(1,0);	
	},
	
	loadfirstimage: function() {
		new Asset.image(this.options.images[0][0], {
			onload: function() {
				$('imgloader').set('html', ("<img src='"+this.options.images[0][0]+"' />"));
				new Fx.Tween('imgloader', {property:'opacity', duration:this.options.fadespeed }).set(0).start(0,1);
			}.bind(this)
		});
	},
	
	nextimage: function() {
		this.moveimage(this.options.current_imgid+1);
	},
	
	previmage: function() {
		this.moveimage(this.options.current_imgid-1);
	}

});

