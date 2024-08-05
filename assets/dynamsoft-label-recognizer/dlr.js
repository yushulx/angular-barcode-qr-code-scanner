/*!
* Dynamsoft JavaScript Library
* @product Dynamsoft Label Recognizer JS Edition
* @website http://www.dynamsoft.com
* @copyright Copyright 2024, Dynamsoft Corporation
* @author Dynamsoft
* @version 3.2.30
* @fileoverview Dynamsoft JavaScript Library for Barcode Reader
* More info on dlr JS: https://www.dynamsoft.com/label-recognition/docs/web/programming/javascript/
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("dynamsoft-core")):"function"==typeof define&&define.amd?define(["exports","dynamsoft-core"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).Dynamsoft=e.Dynamsoft||{},e.Dynamsoft.DLR={}),e.Dynamsoft.Core)}(this,(function(e,t){"use strict";const s="undefined"==typeof self,a=(()=>{if(!s&&document.currentScript){let e=document.currentScript.src,t=e.indexOf("?");if(-1!=t)e=e.substring(0,t);else{let t=e.indexOf("#");-1!=t&&(e=e.substring(0,t))}return e.substring(0,e.lastIndexOf("/")+1)}return"./"})(),r=e=>{if(null==e&&(e="./"),s);else{let t=document.createElement("a");t.href=e,e=t.href}return e.endsWith("/")||(e+="/"),e};null==t.engineResourcePaths.dlr&&(t.engineResourcePaths.dlr=a),null==t.engineResourcePaths.dlrData&&(t.engineResourcePaths.dlrData=r(a+"../../dynamsoft-label-recognizer-data@1.0.11/dist/")),t.workerAutoResources.dlr={js:!0,wasm:!0,deps:["license","dip","dnn"]},t.workerAutoResources.dnn={wasm:!0};const c="1.2.10";"string"!=typeof t.engineResourcePaths.std&&t.compareVersion(t.engineResourcePaths.std.version,c)<0&&(t.engineResourcePaths.std={version:c,path:r(a+`../../dynamsoft-capture-vision-std@${c}/dist/`)});const o="2.2.30";(!t.engineResourcePaths.dip||"string"!=typeof t.engineResourcePaths.dip&&t.compareVersion(t.engineResourcePaths.dip.version,o)<0)&&(t.engineResourcePaths.dip={version:o,path:r(a+`../../dynamsoft-image-processing@${o}/dist/`)});const n="1.0.20";(!t.engineResourcePaths.dnn||"string"!=typeof t.engineResourcePaths.dnn&&t.compareVersion(t.engineResourcePaths.dnn.version,n)<0)&&(t.engineResourcePaths.dnn={version:n,path:r(a+`../../dynamsoft-capture-vision-dnn@${n}/dist/`)});let i=!1;class l{static getVersion(){const e=t.innerVersions.dlr&&t.innerVersions.dlr.wasm,s=t.innerVersions.dlr&&t.innerVersions.dlr.worker;return`3.2.30(Worker: ${s||"Not Loaded"}, Wasm: ${e||"Not Loaded"})`}static async loadRecognitionData(e,s){return await t.loadWasm("dlr"),await new Promise(((a,c)=>{let o=t.getNextTaskID();t.mapTaskCallBack[o]=async e=>{if(e.success){const t=e.result;if(0!==t.exception){let e=new Error(t.description);return e.errorCode=t.exception,c(e)}return t.bModel||(i=!0),a(t)}{let t=new Error(e.message);return t.stack=e.stack+"\n"+t.stack,c(t)}},s&&!s.endsWith("/")&&(s+="/"),s||"ConfusableChars"!==e||(s=t.CoreModule.engineResourcePaths.dlr);let n=t.CoreModule.engineResourcePaths.dlrData;t.CoreModule.engineResourcePaths.rootDirectory&&(n.startsWith("http://")||n.startsWith("https://")||(n=t.CoreModule.engineResourcePaths.rootDirectory+"/"+n)),t.CoreModule.engineResourcePaths.dlrData=r(n),t.worker.postMessage({type:"dlr_loadData",id:o,body:{dataName:e,dataPath:s||t.CoreModule.engineResourcePaths.dlrData}})}))}}t.mapPackageRegister.dlr={filterVINResult:function(e){let t="";if(18===e.characterResults.length){let t=e.characterResults[9].location.points[0].x-e.characterResults[8].location.points[1].x;t<2&&(t=2);let s=e.characterResults[1].location.points[0].x-e.characterResults[0].location.points[1].x,a=e.characterResults[17].location.points[0].x-e.characterResults[16].location.points[1].x,r=2===t?3:t;if(s-t>=r&&a-t<r)e.characterResults.shift();else if(a-t>=r&&s-t<r)e.characterResults.pop();else{e.characterResults[0].characterHConfidence>e.characterResults[17].characterHConfidence?e.characterResults.pop():e.characterResults.shift()}}else if(19===e.characterResults.length){let t=e.characterResults[10].location.points[0].x-e.characterResults[9].location.points[1].x;t<2&&(t=2);let s,a,r,c=e.characterResults[1].location.points[0].x-e.characterResults[0].location.points[1].x,o=e.characterResults[18].location.points[0].x-e.characterResults[17].location.points[1].x,n=e.characterResults[2].location.points[0].x-e.characterResults[1].location.points[1].x,i=e.characterResults[17].location.points[0].x-e.characterResults[16].location.points[1].x,l=2===t?3:t;if("1"===e.characterResults[1].characterH||"1"===e.characterResults[2].characterH||"1"===e.characterResults[16].characterH||"1"===e.characterResults[17].characterH){for(let t=9;t<e.characterResults.length;t++)if("1"!==e.characterResults[t].characterH){r=e.characterResults[t].location.points[1].x-e.characterResults[t].location.points[0].x;break}"1"===e.characterResults[1].characterH&&(s=r-(e.characterResults[1].location.points[1].x-e.characterResults[1].location.points[0].x)+3),"1"===e.characterResults[2].characterH&&(s=r-(e.characterResults[2].location.points[1].x-e.characterResults[2].location.points[0].x)+3),"1"===e.characterResults[16].characterH&&(a=r-(e.characterResults[16].location.points[1].x-e.characterResults[16].location.points[0].x)+3),"1"===e.characterResults[17].characterH&&(a=r-(e.characterResults[17].location.points[1].x-e.characterResults[17].location.points[0].x)+3)}if(n-t>=(s||l)&&i-t<(a||l))e.characterResults.splice(0,2);else if(i-t>=(a||l)&&n-t<(s||l))e.characterResults.splice(17,2);else if(c>t&&o>t)e.characterResults.pop(),e.characterResults.shift();else{let t=e.characterResults[0].characterHConfidence+e.characterResults[1].characterHConfidence,s=e.characterResults[17].characterHConfidence+e.characterResults[18].characterHConfidence,a=e.characterResults[0].characterHConfidence+e.characterResults[18].characterHConfidence,r=Math.min(t,s,a);r===t?e.characterResults.splice(0,2):r===s?e.characterResults.splice(17,2):r===a&&(e.characterResults.pop(),e.characterResults.shift())}}for(let s of e.characterResults)t+=s.characterH;return t},loadRecognitionData:l.loadRecognitionData,get bLoadConfusableCharsData(){return i}},t.mapTaskCallBack[-1]=async e=>{l.onDataLoadProgressChanged&&l.onDataLoadProgressChanged(e.resourcesPath,e.tag,{loaded:e.loaded,total:e.total})},e.LabelRecognizerModule=l}));
