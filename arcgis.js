//移动到纳污范围变换颜色（虚线边框）+边框闪亮效果


//集团初始化地图
initBaseMap: function () {
    //初始化地图
    var self = this;
    this.$refs.baseMap.init('mapDiv', {
        fromServer: true,
        // serverURL: serviceHelper.getBasicPath(),
        serverURL: serviceHelper.getEwaterPath(),
        token: serviceHelper.getToken(),
        mapType: 0,
        layerControl: 0
    }, function (api, currentMap, baseView) {
        self.baseMap = currentMap;
        self.baseView = baseView;
        self.apiInstance = api;
        // let extend={
        //     xmax:[113.42566378324312,22.279619081520025],
        //     xmin:[113.58634737178434,22.248169780233358],
        //     ymax:[113.57672354188242,22.28030649794159],
        //     ymin:[113.58634737178434,22.248169780233358],
        // }
        // baseView.goTo(extend)
        baseView.on('layerview-create', function (evt) {//跳转到指定位置
            setTimeout(()=>{
                let x=self.appUserInfo.info.factory.xCoordinates;
                let y=self.appUserInfo.info.factory.yCoordinates;
                self.$refs.baseMap.setCenter(x,y)
            },800)
        });
        self.graLayer = this.$refs.baseMap.addGraphicLayer('graphicLayer');
        self.drawLayer = this.$refs.baseMap.addGraphicLayer("drawLayer", null, (response) => {
            let result = response.results[0].graphic.attributes;
            console.log(result);
            if (result.type === "ploygon") {
                console.error("ff")
            }
        });
        self.drawLayer2 = this.$refs.baseMap.addGraphicLayer("drawLayer2", null, (response) => {
            let result = response.results[0].graphic.attributes;
            console.log(result);
            if (result.type === "ploygon") {
                console.error("ff")
            }
        });
        self.pictureMarkLayer = this.$refs.baseMap.addGraphicLayer("pictureMarkLayer", null, function (response) {
            let result = response.results[0].graphic.attributes;
            if (result.factoryId) {
                eventHelper.emit("showInfoBox", result.factoryId)
            }
        });
        self.getAllFactoryInfo();//首页获取所有厂区信息 在这里这行，因为要用到view 和api
        self.getAllPolygon();//首页获取所有wkt 在这里这行，因为要用到view 和api

        baseView.on('click', function (evt) {
            console.error(evt.mapPoint.longitude + " " + evt.mapPoint.latitude);
            eventHelper.emit("saveWkt", [evt.mapPoint.longitude, evt.mapPoint.latitude])
        });

        self.baseView.on("pointer-move", function (event) { //鼠标移入时间
            self.baseView.hitTest(event).then(function (response) {
                //当前鼠标下的图形，也就是应该高亮的图形
                let pointerFacilityGraphic = null;

                //图形（graphic）点击事件的实现
                if (response.results[0]) {
                    //获取到点击的图形
                    var graphic = response.results[0].graphic;

                    if (graphic.layer) {
                        //实现点击楼层地图的构筑物后，构筑物地图加载当前构筑物的图层
                        if (graphic.layer.id === "drawLayer") {
                            //当前鼠标下的图形，也就是应该高亮的图形
                            pointerFacilityGraphic = graphic;
                        }
                    }
                }
                //实现高亮图形效果
                if (pointerFacilityGraphic == null && this.highlightFacilityGraphic != null) {
                    //当鼠标下没有图形，当前有高亮图形，把当前高亮的效果去掉
                    // 鼠标移出
                    clearInterval(self.clearTimeOut);//改变颜色+边框闪亮
                    self.setGraphicHighlight(this.highlightFacilityGraphic, false);
                    this.highlightFacilityGraphic = null;
                    this.defaultSymbol = null;//改变颜色+边框闪亮
                }
                else if (pointerFacilityGraphic != null && this.highlightFacilityGraphic == null) {
                    //当鼠标下有图形，当前没有高亮图形，把鼠标图形设为高亮
                    // 鼠标移入
                    clearInterval(self.clearTimeOut);//改变颜色+边框闪亮
                    self.defaultSymbol = pointerFacilityGraphic.symbol;//改变颜色+边框闪亮
                    self.setGraphicHighlight(pointerFacilityGraphic, true);
                    this.highlightFacilityGraphic = pointerFacilityGraphic;
                }
                else if (pointerFacilityGraphic != null && this.highlightFacilityGraphic === pointerFacilityGraphic) {
                    //当鼠标下有图形，且跟当前高亮图形是同一个，不做任何事
                    // 鼠标在图形上移动
                }
                else if (pointerFacilityGraphic != null && this.highlightFacilityGraphic !== pointerFacilityGraphic) {
                    //当鼠标下有图形，且跟当前高亮图形不同一个，把鼠标图形设为高亮，把当前高亮的效果去掉
                    self.setGraphicHighlight(this.highlightFacilityGraphic, false);
                    self.defaultSymbol = pointerFacilityGraphic.symbol;//改变颜色+边框闪亮
                    clearInterval(self.clearTimeOut);//改变颜色+边框闪亮
                    self.setGraphicHighlight(pointerFacilityGraphic, true);
                    this.highlightFacilityGraphic = pointerFacilityGraphic;
                }

            }.bind(this))
        }.bind(this));
    }.bind(this));
},
setGraphicHighlight: function (graphic, isHighlight) {
    var style = {
        type: "simple-fill",
        //线颜色
        color: [this.defaultSymbol.color.r,this.defaultSymbol.color.g,this.defaultSymbol.color.b,this.defaultSymbol.color.a],
        outline: {
            color: [this.defaultSymbol.outline.color.r,this.defaultSymbol.outline.color.g,this.defaultSymbol.outline.color.b,this.defaultSymbol.outline.color.a],
            width: 1.55,
            style:"dash"
        }
    };
    if (isHighlight) {
        //高亮
        style.color = [0, 0, 0, 0.3];
        style.outline.width = 2;
        graphic.symbol = style;
        this.clearTimeOut = setInterval(() => { //闪亮效果
            if(this.clearBorderOpacity < 1){
                this.clearBorderOpacity = 1;
            }else{
                this.clearBorderOpacity = 0.1;
            }
            style.outline.color = [this.defaultSymbol.outline.color.r,this.defaultSymbol.outline.color.g,this.defaultSymbol.outline.color.b,this.clearBorderOpacity];
            graphic.symbol = style;
        },300)
    }
    else {
        //不高亮
        graphic.symbol = style;
    }
},