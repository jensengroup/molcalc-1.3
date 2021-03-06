Clazz.declarePackage ("J.renderbio");
Clazz.load (["J.renderbio.TraceRenderer"], "J.renderbio.StrandsRenderer", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.strandCount = 0;
this.strandSeparation = 0;
this.baseStrandOffset = 0;
Clazz.instantialize (this, arguments);
}, J.renderbio, "StrandsRenderer", J.renderbio.TraceRenderer);
Clazz.overrideMethod (c$, "renderBioShape", 
function (bioShape) {
this.renderStrandShape ();
}, "J.shapebio.BioShape");
$_M(c$, "renderStrandShape", 
function () {
if (!this.setStrandCount ()) return;
this.renderStrands ();
});
$_M(c$, "setStrandCount", 
function () {
if (this.wingVectors == null) return false;
this.strandCount = (Clazz.instanceOf (this.shape, J.shapebio.Strands) ? this.viewer.getStrandCount ((this.shape).shapeID) : 10);
this.strandSeparation = (this.strandCount <= 1) ? 0 : 1 / (this.strandCount - 1);
this.baseStrandOffset = ((this.strandCount & 1) == 0 ? this.strandSeparation / 2 : this.strandSeparation);
return true;
});
$_M(c$, "renderStrands", 
function () {
var screens;
for (var i = this.strandCount >> 1; --i >= 0; ) {
var f = (i * this.strandSeparation) + this.baseStrandOffset;
screens = this.calcScreens (f);
this.renderStrand (screens);
this.viewer.freeTempScreens (screens);
screens = this.calcScreens (-f);
this.renderStrand (screens);
this.viewer.freeTempScreens (screens);
}
if (this.strandCount % 2 == 1) {
screens = this.calcScreens (0);
this.renderStrand (screens);
this.viewer.freeTempScreens (screens);
}});
$_M(c$, "renderStrand", 
($fz = function (screens) {
for (var i = this.bsVisible.nextSetBit (0); i >= 0; i = this.bsVisible.nextSetBit (i + 1)) this.renderHermiteCylinder (screens, i);

}, $fz.isPrivate = true, $fz), "~A");
});
