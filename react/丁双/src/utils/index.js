

// export {names,course} from "./msg";

export {ajax} from "./ajax";

export {axios} from "./axios";

export {css , myEvent,getQuery} from "./commonCss.js";

export {history} from "./history";

// 拍照
export function takePhoto(){
    var cmr = plus.camera.getCamera();
    var res = cmr.supportedImageResolutions[0];
    var fmt = cmr.supportedImageFormats[0];
    console.log("Resolution: "+res+", Format: "+fmt);
    cmr.captureImage( function( path ){
            var pic = document.getElementById("pic");
            
            plus.io.resolveLocalFileSystemURL(path, function(entry){
                pic.src =  entry.toLocalURL();
            }, function(e){
                outLine('读取录像文件错误：'+e.message);
            } );
            alert( "Capture image success: " + path );  
        },
        function( error ) {
            alert( "Capture image failed: " + error.message );
        },
        {resolution:res,format:fmt}
    );
}