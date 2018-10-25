(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("zingtouch")):"function"==typeof define&&define.amd?define(["zingtouch"],b):a.VuetifyImageInput=b(a.ZingTouch)})(this,function(a){"use strict";var g=Math.round,h=Math.max;function b(a){return function(){return a}}function c(a){return"function"==typeof a}function d(a){return c(a)?a:b(a)}function e(a,b,c){var d=Math.min;return d(h(a,b),c)}function f(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new Image;n.src=a;var o=document.createElement("canvas"),p=o.getContext("2d");return o.width=j,o.height=k,e&&(p.translate(j,0),p.scale(-1,1)),f&&(p.translate(0,k),p.scale(1,-1)),p.translate(h,i),p.scale(g,g),p.drawImage(n,0,0),o.toDataURL("image/"+l,m)}a=a&&a.hasOwnProperty("default")?a["default"]:a;var i,j={clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},clearIconStyle:[Function,Object],disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:b({transform:"rotate(90deg)"})},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageFormat:{type:String,default:"png"},imageHeight:{type:Number,default:256},imageQuality:{},imageWidth:{type:Number,default:256},overlayBackgroundColor:{type:String,default:"rgba(0,0,0,0.5)"},overlayBorderColor:{type:String,default:"#fff"},overlayBorderWidth:{type:String,default:"4px"},overlayPadding:{type:String,default:"50px"},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:b({transform:"scaleX(-1)"})},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},k=Object.assign({},{checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')","center center / 16px 16px","repeat","#fff"].join(" ")},croppingLeft:{get:function(){return e(g(this.dirtyCroppingLeft),this.imageWidth-this.displayedImageWidth,0)},set:function(a){this.dirtyCroppingLeft=a}},croppingTop:{get:function(){return e(g(this.dirtyCroppingTop),this.imageHeight-this.displayedImageHeight,0)},set:function(a){this.dirtyCroppingTop=a}},displayedImageHeight:function(){return g(this.scaling*this.rotatedInternalImageHeight)},displayedImageWidth:function(){return g(this.scaling*this.rotatedInternalImageWidth)},imageData:function(){return this.internalImageData?f(this.internalImageData,this.internalImageWidth,this.internalImageHeight,this.rotated,this.flippedHorizontally,this.flippedVertically,this.scaling,this.croppingLeft,this.croppingTop,this.imageWidth,this.imageHeight,this.imageFormat,this.imageQuality):null},maxScaling:function(){return h(1,this.minScaling)},minScaling:function(){return this.rotatedInternalImageWidth&&this.rotatedInternalImageHeight?h(this.imageWidth/this.rotatedInternalImageWidth,this.imageHeight/this.rotatedInternalImageHeight):0},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaling:{get:function(){return e(this.dirtyScaling,this.minScaling,this.maxScaling)},set:function(a){this.dirtyScaling=a}}},function(a,b){var c={};return Object.entries(a).forEach(function(d){var e=d[0],f=d[1];c[e]=b(f,e,a)}),c}({remappedClearIcon:"clearIcon",remappedClearIconStyle:"clearIconStyle",remappedFlipHorizontallyIcon:"flipHorizontallyIcon",remappedFlipHorizontallyIconStyle:"flipHorizontallyIconStyle",remappedFlipVerticallyIcon:"flipVerticallyIcon",remappedFlipVerticallyIconStyle:"flipVerticallyIconStyle",remappedRotateClockwiseIcon:"rotateClockwiseIcon",remappedRotateClockwiseIconStyle:"rotateClockwiseIconStyle",remappedRotateCounterclockwiseIcon:"rotateCounterclockwiseIcon",remappedRotateCounterclockwiseIconStyle:"rotateCounterclockwiseIconStyle",remappedUploadIcon:"uploadIcon",remappedUploadIconStyle:"uploadIconStyle"},function(a){return function(){return d(this[a]).call(this)}})),l={name:"VImageInput",components:{MyUploader:{inject:{theme:{default:{isDark:!1}}},props:["disabled","uploadIcon","uploadIconStyle"],methods:{onChange:function(a){var b=a.target.files;b&&this.uploadFiles(b)},onClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},onDragLeave:function(a){a.preventDefault()},onDragOver:function(a){a.preventDefault()},onDrop:function(a){if(a.preventDefault(),!this.disabled){var b=a.dataTransfer.files;b&&this.uploadFiles(b)}},uploadFile:function(a){var b=this,c=new FileReader;c.addEventListener("load",function(){b.$emit("load",c.result)}),c.readAsDataURL(a)},uploadFiles:function(a){a.length&&this.uploadFile(a[0])}},render:function(a){return a("div",{style:{alignItems:"center",border:"1px dashed rgba("+(this.theme.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",cursor:"pointer",display:"flex",justifyContent:"center"},on:{dragleave:this.onDragLeave,dragover:this.onDragOver,drop:this.onDrop,click:this.onClick}},[a("input",{style:{display:"none"},attrs:{type:"file"},on:{change:this.onChange},ref:"input"}),a("VIcon",{style:this.uploadIconStyle,props:{large:!0}},this.uploadIcon)])}}},directives:{Pan:{bind:function(b,c){var d=c.value;i||(i=new a.Region(document.body)),i.bind(b,"pan",function(a){var b=a.detail,c=b.data,e=b.events;d.apply(void 0,[c].concat(e))})},unbind:function(a){i.unbind(a,"pan")}}},inject:{theme:{default:{isDark:!1}}},props:j,data:function(){return{dirtyCroppingLeft:0,dirtyCroppingTop:0,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:k,created:function(){this.$watch("value",function(a){this.load(a)},{immediate:!0}),this.$watch("imageData",function(a){this.$emit("input",a)},{immediate:!0})},methods:{center:function(){this.croppingLeft=(this.imageWidth-this.displayedImageWidth)/2,this.croppingTop=(this.imageHeight-this.displayedImageHeight)/2},clear:function(){this.internalImageData=null},createActionButtonElement:function(a,b,c,d){return a("VBtn",{class:"ma-1",props:{disabled:this.disabled,flat:!0,icon:!0},on:{click:b}},[a("VIcon",{style:d},c)])},createClearButtonElement:function(a){return this.createActionButtonElement(a,this.clear,this.remappedClearIcon,this.remappedClearIconStyle)},createFlipHorizontallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipHorizontally,this.remappedFlipHorizontallyIcon,this.remappedFlipHorizontallyIconStyle)},createFlipVerticallyButtonElement:function(a){return this.createActionButtonElement(a,this.flipVertically,this.remappedFlipVerticallyIcon,this.remappedFlipVerticallyIconStyle)},createRotateClockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateClockwise,this.remappedRotateClockwiseIcon,this.remappedRotateClockwiseIconStyle)},createRotateCounterclockwiseButtonElement:function(a){return this.createActionButtonElement(a,this.rotateCounterclockwise,this.remappedRotateCounterclockwiseIcon,this.remappedRotateCounterclockwiseIconStyle)},createScaleSliderElement:function(a){return a("VSlider",{class:"mx-2 my-1",props:{disabled:this.disabled,hideDetails:!0,max:this.maxScaling,min:this.minScaling,step:1/1e3,value:this.scaling},on:{input:this.setScaling}})},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically},load:function(a){var b=this;if((this.imageData||a)&&this.imageData!==a){var c=new Image;c.addEventListener("load",function(){var d=c.naturalWidth||c.width,e=c.naturalHeight||c.height;d&&e?(b.internalImageData=a,b.internalImageWidth=d,b.internalImageHeight=e,b.flippedHorizontally=!1,b.flippedVertically=!1,b.rotated=!1,b.scaling=0,b.center()):b.internalImageData=null}),c.src=a}},onPan:function(a,b){var c=b.originalEvent,d=c.movementX,e=c.movementY;this.flippedHorizontally&&(d*=-1),this.flippedVertically&&(e*=-1),this.croppingLeft+=d,this.croppingTop+=e},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0},rotateCounterclockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically)},scale:function(a){this.scaling*=a,this.croppingLeft*=a,this.croppingTop*=a},setScaling:function(a){this.scale(a/this.scaling)}},render:function(a){return a("div",{style:Object.assign({},{display:"inline"},this.fullWidth?{width:"100%"}:{},this.fullHeight?{height:"100%"}:{})},[a("div",{style:{display:"table",height:0,minHeight:"100%",minWidth:"100%",width:0}},[a("div",{style:{display:"table-row"}},[a("div",{style:{display:"table-cell",height:"100%",position:"relative",width:"100%"}},[a("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},this.disabled||this.readonly?{}:{directives:[{name:"Pan",value:this.onPan}]}),[a("div",{style:{height:this.imageHeight+"px",pointerEvents:"none",position:"relative",width:this.imageWidth+"px"}},[a("img",{style:{pointerEvents:"none",position:"absolute",transform:(this.flippedVertically?["translateY("+this.imageHeight+"px)","scaleY(-1)"]:[]).concat(this.flippedHorizontally?["translateX("+this.imageWidth+"px)","scaleX(-1)"]:[],["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)"],["scale("+this.scaling+")"]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}}),a("div",{style:{bottom:0,boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,boxSizing:"content-box",left:0,outline:this.overlayBorderWidth+" solid "+this.overlayBorderColor,position:"absolute",right:0,top:0}})])])].concat(this.internalImageData?[]:[a("MyUploader",{props:{disabled:this.disabled||this.readonly,uploadIcon:this.remappedUploadIcon,uploadIconStyle:this.remappedUploadIconStyle},style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),a("div",{style:Object.assign({},{display:"table-cell",verticalAlign:"top"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},[a("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"100%"}},(this.clearable?[this.createClearButtonElement(a),a("v-spacer")]:[]).concat(this.hideActions||this.readonly?[]:[this.createFlipHorizontallyButtonElement(a),this.createFlipVerticallyButtonElement(a)]))])]),a("div",{style:{display:"table-row"}},[a("div",{style:Object.assign({},{display:"table-cell"},this.internalImageData?{}:{opacity:0,visibility:"hidden"})},this.hideActions||this.readonly?[]:[this.createScaleSliderElement(a)]),a("div",{style:{display:"table-cell"}})])])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(l.name,l),l});
