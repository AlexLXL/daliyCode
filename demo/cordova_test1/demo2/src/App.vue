<template>
    <div>
        <div class="appWrap" @click="handleClick">点击</div>
        <div class="appWrap" @click="handleClick">点击2</div>
        <button style="width:200px;height:40px;background: orange;" @click="openCarma(1)">take photo</button>
        <button style="width:200px;height:40px;background: orange;" @click="openCarma(2)">take photo</button>
        <img :src="imageDate" alt="" style="width:200px;height:200px;"/>
    </div>
</template>

<script>
    let self;
    export default {
        data(){
            return {
                imageDate:'',
            }
        },
        created: function () {
            self = this;
        },
        methods: {
            handleClick() {
                alert("is me!")
            },
            openCarma: function (sourceType) {
                var cameraOptions = {
                    quality: 100,                                            //相片质量0-100
                    destinationType: Camera.DestinationType.DATA_URL,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
                    sourceType: sourceType,                             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
                    allowEdit: false,                                        //在选择之前允许修改截图
                    encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
                    targetWidth: 800,                                        //照片宽度
                    targetHeight: 600,                                       //照片高度
                    mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
                    cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
                    saveToPhotoAlbum: true
                };
                navigator.camera.getPicture(onSuccess, onFail, cameraOptions);

                function onSuccess(imageData) {
                    self.imageDate = "data:image/jpeg;base64," + imageData;
                    alert(imageData);
                    alert(self.imageDate)
                }

                function onFail(message) {
                    alert('Failed because: ' + message);
                }
            },
        },


    }
</script>

<style>
    .appWrap {
        background-color: #ccc;
    }
</style>
