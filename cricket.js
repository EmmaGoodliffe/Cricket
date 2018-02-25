var i;
var vowel = "aeiouaeiouaeiouaeiouaeioua".split("");
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var both = [vowel, alphabet];
var name = "";
var bowl = {
	opts: [],
	optsFunc: function (value, quantity) {
		for (i = 0; i < quantity; i++) {
			bowl.opts.push(value)
		};
	},
	el: document.querySelector("#bowl"),
	meth: function () {
		ball.innerText =
bowl.opts[Math.floor(Math.random() * bowl.opts.length)+1];
		if (ball.innerText == "wicket") {
			alert("wicket!")
			ball.innerText = ["caught", "caught", "caught",
"bowled", "bowled", "bowled", "LBW", "LBW", "LBW", "stumped",
"stumped", "run out", "run out", "run out", "hit wicket"]
[Math.floor(Math.random()*15)]
		}
	}
};

bowl.el.addEventListener("click", bowl.meth);
document.querySelector("#name").addEventListener("click",
randomName);
document.querySelector("#force-wicket").addEventListener("click", forceWicket);

var ball = document.querySelector("#ball");

bowl.optsFunc("dot", 10);
bowl.optsFunc(1, 8);
bowl.optsFunc(2, 6);
bowl.optsFunc(3, 3);
bowl.optsFunc(4, 5);
bowl.optsFunc(6, 2);
bowl.optsFunc("wicket", 1);
bowl.optsFunc("wide", 2);
bowl.optsFunc("noball", 2);
bowl.optsFunc((Math.floor(Math.random()*4)+1)+" byes", 2);
bowl.optsFunc((Math.floor(Math.random()*2)+1)+" leg byes", 2);

function randomName () {
	name = "";
	for (var i = 0; i < Math.floor(Math.random()*5)+1; i++) {
		name = name + both[Math.floor(Math.random()*2)]
[Math.floor(Math.random()*27)]
	};
	name = name + alphabet[Math.floor(Math.random()*27)];
	name = name + vowel[Math.floor(Math.random()*27)];
	if (name.split("").length > 6) {
		randomName()
	};
	alert(name);
}

function forceWicket() {
	alert("wicket");
	var t = ["caught", "caught", "caught",
"bowled", "bowled", "bowled", "LBW", "LBW", "LBW", "stumped",
"stumped", "run out", "run out", "run out", "hit wicket"];
	ball.innerText = t[Math.floor(Math.random()*t.length)];
}
