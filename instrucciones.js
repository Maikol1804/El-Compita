(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 580,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/abajo.png?1463531338148", id:"abajo"},
		{src:"images/arriba.png?1463531338148", id:"arriba"},
		{src:"images/creadopor.png?1463531338148", id:"creadopor"},
		{src:"images/derecha.png?1463531338148", id:"derecha"},
		{src:"images/diploma.png?1463531338148", id:"diploma"},
		{src:"images/down1.png?1463531338148", id:"down1"},
		{src:"images/down2.png?1463531338148", id:"down2"},
		{src:"images/down3.png?1463531338148", id:"down3"},
		{src:"images/espaciadora.png?1463531338148", id:"espaciadora"},
		{src:"images/hoja.png?1463531338148", id:"hoja"},
		{src:"images/instrucciones_1.png?1463531338148", id:"instrucciones_1"},
		{src:"images/izquierda.png?1463531338148", id:"izquierda"},
		{src:"images/left1.png?1463531338148", id:"left1"},
		{src:"images/left2.png?1463531338148", id:"left2"},
		{src:"images/left3.png?1463531338148", id:"left3"},
		{src:"images/mecha.png?1463531338148", id:"mecha"},
		{src:"images/mensajeDiploma.png?1463531338148", id:"mensajeDiploma"},
		{src:"images/papa.png?1463531338148", id:"papa"},
		{src:"images/right1.png?1463531338148", id:"right1"},
		{src:"images/right2.png?1463531338148", id:"right2"},
		{src:"images/right3.png?1463531338148", id:"right3"},
		{src:"images/up1.png?1463531338148", id:"up1"},
		{src:"images/up2.png?1463531338148", id:"up2"},
		{src:"images/up3.png?1463531338148", id:"up3"}
	]
};



// symbols:



(lib.abajo = function() {
	this.initialize(img.abajo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,191);


(lib.arriba = function() {
	this.initialize(img.arriba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,193);


(lib.creadopor = function() {
	this.initialize(img.creadopor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,162);


(lib.derecha = function() {
	this.initialize(img.derecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,191);


(lib.diploma = function() {
	this.initialize(img.diploma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.down1 = function() {
	this.initialize(img.down1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,112);


(lib.down2 = function() {
	this.initialize(img.down2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,118);


(lib.down3 = function() {
	this.initialize(img.down3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,110);


(lib.espaciadora = function() {
	this.initialize(img.espaciadora);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,825,132);


(lib.hoja = function() {
	this.initialize(img.hoja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,501);


(lib.instrucciones_1 = function() {
	this.initialize(img.instrucciones_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,539);


(lib.izquierda = function() {
	this.initialize(img.izquierda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,191);


(lib.left1 = function() {
	this.initialize(img.left1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,110);


(lib.left2 = function() {
	this.initialize(img.left2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,118);


(lib.left3 = function() {
	this.initialize(img.left3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,106);


(lib.mecha = function() {
	this.initialize(img.mecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,15);


(lib.mensajeDiploma = function() {
	this.initialize(img.mensajeDiploma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,413);


(lib.papa = function() {
	this.initialize(img.papa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.right1 = function() {
	this.initialize(img.right1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,108);


(lib.right2 = function() {
	this.initialize(img.right2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,119);


(lib.right3 = function() {
	this.initialize(img.right3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,107);


(lib.up1 = function() {
	this.initialize(img.up1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,112);


(lib.up2 = function() {
	this.initialize(img.up2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,115);


(lib.up3 = function() {
	this.initialize(img.up3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,102);


(lib.player1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.up1();
	this.instance.setTransform(-24.5,-55);

	this.instance_1 = new lib.up2();
	this.instance_1.setTransform(-20.5,-58.5);

	this.instance_2 = new lib.up3();
	this.instance_2.setTransform(-17.8,-51);

	this.instance_3 = new lib.right1();
	this.instance_3.setTransform(-43.5,-54.5);

	this.instance_4 = new lib.right2();
	this.instance_4.setTransform(-20.5,-60.5);

	this.instance_5 = new lib.right3();
	this.instance_5.setTransform(-41.4,-53);

	this.instance_6 = new lib.down1();
	this.instance_6.setTransform(-24.5,-56);

	this.instance_7 = new lib.down2();
	this.instance_7.setTransform(-19.8,-59.5);

	this.instance_8 = new lib.down3();
	this.instance_8.setTransform(-15.3,-55);

	this.instance_9 = new lib.left1();
	this.instance_9.setTransform(-42.5,-55);

	this.instance_10 = new lib.left2();
	this.instance_10.setTransform(-20.4,-59);

	this.instance_11 = new lib.left3();
	this.instance_11.setTransform(-44,-53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_8}]},11).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_11}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-55,47,112);


(lib.mecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.mecha();
	this.instance.setTransform(-9.5,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-7.1,20,15);


(lib.izquierda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.izquierda();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,191);


(lib.hoja_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.hoja();
	this.instance.setTransform(268.7,0,1.053,1.072,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,628,672.9);


(lib.espaciadoraBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.espaciadora();
	this.instance.setTransform(-401.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.5,-67,825,132);


(lib.derecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.derecha();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,191);


(lib.arriba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.arriba();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,193);


(lib.abajo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.abajo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,191);


(lib.teclas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arriba
	this.instance = new lib.arriba_1();
	this.instance.setTransform(2.9,0,1,1,0,0,0,97,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-3.3},0).wait(1).to({y:-6.7},0).wait(1).to({y:-10.1},0).wait(1).to({y:-13.5},0).wait(1).to({y:-16.9},0).wait(1).to({y:-20.3},0).wait(1).to({y:-23.7},0).wait(1).to({y:-27.1},0).wait(1).to({y:-30.5},0).wait(1).to({y:-33.9},0).wait(1).to({y:-37.3},0).wait(1).to({y:-40.7},0).wait(1).to({y:-44.1},0).wait(1).to({y:-47.5},0).wait(1).to({y:-50.9},0).wait(1).to({y:-54.3},0).wait(1).to({y:-57.7},0).wait(1).to({y:-61.1},0).wait(1).to({y:-64.5},0).wait(1).to({y:-61.4},0).wait(1).to({y:-58.4},0).wait(1).to({y:-55.4},0).wait(1).to({y:-52.3},0).wait(1).to({y:-49.3},0).wait(1).to({y:-46.3},0).wait(1).to({y:-43.2},0).wait(1).to({y:-40.2},0).wait(1).to({y:-37.2},0).wait(1).to({y:-34.1},0).wait(1).to({y:-31.1},0).wait(1).to({y:-28.1},0).wait(1).to({y:-25},0).wait(1).to({y:-22},0).wait(1).to({y:-19},0).wait(1).to({y:-15.9},0).wait(1).to({y:-12.9},0).wait(1).to({y:-9.9},0).wait(1).to({y:-6.8},0).wait(1).to({y:-3.8},0).wait(1));

	// derecha
	this.instance_1 = new lib.derecha_1();
	this.instance_1.setTransform(207.3,202.5,1,1,0,0,0,94.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:210.7},0).wait(1).to({x:214.2},0).wait(1).to({x:217.7},0).wait(1).to({x:221.2},0).wait(1).to({x:224.7},0).wait(1).to({x:228.2},0).wait(1).to({x:231.7},0).wait(1).to({x:235.2},0).wait(1).to({x:238.7},0).wait(1).to({x:242.2},0).wait(1).to({x:245.7},0).wait(1).to({x:249.2},0).wait(1).to({x:252.7},0).wait(1).to({x:256.2},0).wait(1).to({x:259.7},0).wait(1).to({x:263.2},0).wait(1).to({x:266.7},0).wait(1).to({x:270.2},0).wait(1).to({x:273.7},0).wait(1).to({x:270.5},0).wait(1).to({x:267.2},0).wait(1).to({x:264},0).wait(1).to({x:260.8},0).wait(1).to({x:257.6},0).wait(1).to({x:254.3},0).wait(1).to({x:251.1},0).wait(1).to({x:247.9},0).wait(1).to({x:244.7},0).wait(1).to({x:241.4},0).wait(1).to({x:238.2},0).wait(1).to({x:235},0).wait(1).to({x:231.7},0).wait(1).to({x:228.5},0).wait(1).to({x:225.3},0).wait(1).to({x:222.1},0).wait(1).to({x:218.8},0).wait(1).to({x:215.6},0).wait(1).to({x:212.4},0).wait(1).to({x:209.2},0).wait(1));

	// abajo
	this.instance_2 = new lib.abajo_1();
	this.instance_2.setTransform(1.9,210.4,1,1,0,0,0,96,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:214},0).wait(1).to({y:217.6},0).wait(1).to({y:221.2},0).wait(1).to({y:224.8},0).wait(1).to({y:228.4},0).wait(1).to({y:232},0).wait(1).to({y:235.6},0).wait(1).to({y:239.2},0).wait(1).to({y:242.8},0).wait(1).to({y:246.4},0).wait(1).to({y:250},0).wait(1).to({y:253.6},0).wait(1).to({y:257.2},0).wait(1).to({y:260.8},0).wait(1).to({y:264.4},0).wait(1).to({y:268},0).wait(1).to({y:271.6},0).wait(1).to({y:275.2},0).wait(1).to({y:278.8},0).wait(1).to({y:275},0).wait(1).to({y:271.2},0).wait(1).to({y:267.4},0).wait(1).to({y:263.6},0).wait(1).to({y:259.7},0).wait(1).to({y:255.9},0).wait(1).to({y:252.1},0).wait(1).to({y:248.3},0).wait(1).to({y:244.5},0).wait(1).to({y:240.7},0).wait(1).to({y:236.9},0).wait(1).to({y:233.1},0).wait(1).to({y:229.2},0).wait(1).to({y:225.4},0).wait(1).to({y:221.6},0).wait(1).to({y:217.8},0).wait(1).to({y:214},0).wait(1).to({y:210.2},0).wait(1).to({y:206.4},0).wait(1).to({y:202.6},0).wait(1));

	// izquierda
	this.instance_3 = new lib.izquierda_1();
	this.instance_3.setTransform(-209.2,202.5,1,1,0,0,0,96.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-212.4},0).wait(1).to({x:-215.6},0).wait(1).to({x:-218.8},0).wait(1).to({x:-222},0).wait(1).to({x:-225.1},0).wait(1).to({x:-228.3},0).wait(1).to({x:-231.5},0).wait(1).to({x:-234.7},0).wait(1).to({x:-237.9},0).wait(1).to({x:-241.1},0).wait(1).to({x:-244.3},0).wait(1).to({x:-247.5},0).wait(1).to({x:-250.7},0).wait(1).to({x:-253.8},0).wait(1).to({x:-257},0).wait(1).to({x:-260.2},0).wait(1).to({x:-263.4},0).wait(1).to({x:-266.6},0).wait(1).to({x:-269.8},0).wait(1).to({x:-267},0).wait(1).to({x:-264.1},0).wait(1).to({x:-261.3},0).wait(1).to({x:-258.5},0).wait(1).to({x:-255.6},0).wait(1).to({x:-252.8},0).wait(1).to({x:-250},0).wait(1).to({x:-247.1},0).wait(1).to({x:-244.3},0).wait(1).to({x:-241.5},0).wait(1).to({x:-238.6},0).wait(1).to({x:-235.8},0).wait(1).to({x:-232.9},0).wait(1).to({x:-230.1},0).wait(1).to({x:-227.3},0).wait(1).to({x:-224.4},0).wait(1).to({x:-221.6},0).wait(1).to({x:-218.8},0).wait(1).to({x:-215.9},0).wait(1).to({x:-213.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.7,-96.5,607.5,402.4);


(lib.espaciadora_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.espaciadoraBase();
	this.instance.setTransform(-2,-2,1,1,0,0,0,11,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-4.4},0).wait(1).to({y:-6.9},0).wait(1).to({y:-9.4},0).wait(1).to({y:-11.8},0).wait(1).to({y:-14.3},0).wait(1).to({y:-16.8},0).wait(1).to({y:-19.3},0).wait(1).to({y:-21.7},0).wait(1).to({y:-24.2},0).wait(1).to({y:-26.7},0).wait(1).to({y:-29.2},0).wait(1).to({y:-31.6},0).wait(1).to({y:-34.1},0).wait(1).to({y:-36.6},0).wait(1).to({y:-39.1},0).wait(1).to({y:-41.5},0).wait(1).to({y:-44},0).wait(1).to({y:-46.5},0).wait(1).to({y:-49},0).wait(1).to({y:-46.7},0).wait(1).to({y:-44.5},0).wait(1).to({y:-42.2},0).wait(1).to({y:-40},0).wait(1).to({y:-37.7},0).wait(1).to({y:-35.5},0).wait(1).to({y:-33.2},0).wait(1).to({y:-31},0).wait(1).to({y:-28.7},0).wait(1).to({y:-26.5},0).wait(1).to({y:-24.2},0).wait(1).to({y:-22},0).wait(1).to({y:-19.7},0).wait(1).to({y:-17.5},0).wait(1).to({y:-15.2},0).wait(1).to({y:-13},0).wait(1).to({y:-10.7},0).wait(1).to({y:-8.5},0).wait(1).to({y:-6.2},0).wait(1).to({y:-4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.5,-68,825,132);


(lib.diplomaBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// texto 2
	this.instance = new lib.creadopor();
	this.instance.setTransform(-269.3,333.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(12));

	// texto
	this.instance_1 = new lib.mensajeDiploma();
	this.instance_1.setTransform(-299.5,18.4);

	this.text = new cjs.Text("\n", "20px 'ZeroHour'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 278;
	this.text.setTransform(-24.8,85.8,1,1,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance_1}]},34).wait(12));

	// rollo
	this.instance_2 = new lib.diploma();
	this.instance_2.setTransform(-201.3,-203.9,0.5,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46));

	// hoja
	this.instance_3 = new lib.hoja_1();
	this.instance_3.setTransform(50.6,-96.1,0.918,0.991,0,0,0,314.3,336.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:314,x:44.6,y:-84.7},0).wait(1).to({x:38.8,y:-73.4},0).wait(1).to({x:33,y:-62},0).wait(1).to({x:27.2,y:-50.7},0).wait(1).to({x:21.3,y:-39.4},0).wait(1).to({x:15.5,y:-28},0).wait(1).to({x:9.7,y:-16.7},0).wait(1).to({x:3.9,y:-5.3},0).wait(1).to({x:-1.9,y:6},0).wait(1).to({x:-7.7,y:17.3},0).wait(1).to({x:-13.5,y:28.7},0).wait(1).to({x:-19.3,y:40},0).wait(1).to({x:-25.1,y:51.4},0).wait(1).to({x:-30.9,y:62.7},0).wait(1).to({x:-36.8,y:74},0).wait(1).to({x:-42.6,y:85.4},0).wait(1).to({x:-48.4,y:96.7},0).wait(1).to({x:-54.2,y:108.1},0).wait(1).to({x:-60,y:119.4},0).wait(1).to({x:-65.8,y:130.7},0).wait(1).to({x:-71.6,y:142.1},0).wait(1).to({x:-77.4,y:153.4},0).wait(1).to({x:-83.2,y:164.8},0).wait(1).to({x:-89,y:176.1},0).wait(1).to({x:-94.9,y:187.4},0).wait(1).to({x:-100.7,y:198.8},0).wait(1).to({x:-106.5,y:210.1},0).wait(1).to({x:-112.3,y:221.5},0).wait(1).to({x:-118.1,y:232.8},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.8,-429.6,576.4,667.1);


(lib.diploma_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hoja.gotoAndStop(44);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Capa 1
	this.hoja = new lib.diplomaBase();
	this.hoja.setTransform(0.1,-0.3,1,1,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.hoja).wait(1).to({regX:-33.9,regY:68.3,scaleX:1.02,scaleY:1.02,x:-62.6,y:41.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-63.9,y:42.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-65.2,y:43.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-66.5,y:44.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-67.8,y:45.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-69.2,y:46},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-70.5,y:46.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-71.8,y:47.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-73.2,y:48.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-72,y:47.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-70.8,y:47.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-69.7,y:46.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-68.5,y:45.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-67.4,y:44.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-66.3,y:43.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-65.1,y:42.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-64,y:41.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-62.9,y:40.9},0).wait(1).to({scaleX:1,scaleY:1,x:-61.7,y:40.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-457.4,576.4,667.1);


(lib.blowUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mecha
	this.instance = new lib.mecha_1();
	this.instance.setTransform(28.3,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,regY:0.4,x:27.5,y:-32},0).wait(1).to({x:26.4,y:-31.4},0).wait(1).to({x:25.3,y:-30.7},0).wait(1).to({x:23.6,y:-30.1},0).wait(1).to({x:21.9,y:-29.5},0).wait(1).to({x:20.8,y:-28.9},0).wait(1).to({x:19.8,y:-28.2},0).wait(1).to({x:18.7,y:-27.6},0).wait(1).to({x:17.7,y:-27.2},0).wait(1).to({x:16.6,y:-26.8},0).wait(1).to({x:15.6,y:-26.4},0).wait(1).to({x:14.1,y:-25.8},0).wait(1).to({x:12.6,y:-25.1},0).wait(1).to({x:11.3,y:-24.5},0).wait(1).to({x:9.9,y:-23.8},0).wait(1).to({x:8.7,y:-23.1},0).wait(1).to({x:7.7,y:-22.6},0).wait(1).to({x:6.8,y:-22.1},0).wait(1).to({x:5.8,y:-21.6},0).wait(1).to({x:6,y:-20.9},0).wait(1).to({x:6.1,y:-20.2},0).wait(1).to({x:6.3,y:-19.5},0).wait(1).to({x:6.7,y:-18.9},0).wait(1).to({x:7,y:-18.2},0).wait(1).to({x:7.5,y:-17.5},0).wait(1).to({x:6.9,y:-16.8},0).wait(1).to({x:6.3,y:-16.1},0).wait(1).to({x:5.8,y:-15.4},0).wait(1).to({x:5.2,y:-14.8},0).wait(1).to({x:4.6,y:-14.1},0).wait(1).to({x:4,y:-13.4},0).wait(1).to({x:3.4,y:-12.7},0).wait(1).to({x:2.8,y:-12},0).wait(1).to({x:2.2,y:-11.4},0).wait(1));

	// papa
	this.instance_1 = new lib.papa();
	this.instance_1.setTransform(-34,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-40.1,72.7,72.2);


// stage content:
(lib.instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// teclas
	this.instance = new lib.espaciadora_1();
	this.instance.setTransform(178.6,246.1,0.286,0.286,0,0,0,-1.9,-1.9);

	this.instance_1 = new lib.teclas();
	this.instance_1.setTransform(415.8,157.6,0.252,0.252,0,0,0,-2,104.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// diploma
	this.instance_2 = new lib.diploma_1();
	this.instance_2.setTransform(457.2,404.7,0.193,0.193,-30,0,0,23,-124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// elCompita
	this.instance_3 = new lib.player1();
	this.instance_3.setTransform(68.4,484.8,1,1,0,0,0,-1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bomba
	this.instance_4 = new lib.blowUp();
	this.instance_4.setTransform(81.3,162.5,0.787,0.787,0,0,0,2.4,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// texto
	this.instance_5 = new lib.instrucciones_1();
	this.instance_5.setTransform(38.1,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EArEgtqMhWHAAAMAAABbVMBWHAAAMAAAhFtg");
	this.shape.setTransform(273.7,290.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#345E36").s().p("EgrGAz7MAAAhbWMBWHAAAIAAVoMAAABFugEArBgRzIAA1oIAGAAIAAalgEArBgRzgEgq+gz3IAAgDMAybAAAIAAADg");
	this.shape_1.setTransform(274,250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(272.1,208.2,553.4,665.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;