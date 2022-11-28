import React from "react";
import "./Board.css";

class Board extends React.Component {

       constructor(props) {
          super(props);

       }

       componentDidMount() {
           this.drawOnCanvas();
       }

       drawOnCanvas() {
        var canvas = document.querySelector('#board');  // switch to #board because of our canvas id
        var ctx = canvas.getContext('2d');
    
        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));
    
        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};
    
        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;
    
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);
    
        /* Drawing on Paint App */
        ctx.lineWidth = 1;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';
    
        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);
    
        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);
    
        var root = this;
        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

        /*
            if(root.timeout != undefined) clearTimeout(root.timeout);
            root.timeout = setTimeout(function() {
                 var base64ImageData = canvas.toDataUrl("image/png");
            }, 1000)
        */

        };
       }

       render() {
        const {BGImage} = this.props;
           return (
            <div 
                className="sketch" 
                id="sketch" 
                style={{backgroundImage: `url("${BGImage}")`}} >
                    <canvas className="board" id="board"></canvas>
            </div>
           )
       }
}

export default Board;


/*
import simplify from 'simplify-js';

window.WhiteboardManager = (function () {
    var opt = {
        INIT : false,
        INIT_time : null,
        TUTORIAL : false,
        DEMO : false,
        API : '/api/v1/messenger/',
        whiteboard_socket : null,
        settings : {
            lockout : true,
            streams_visible : true,
            drawing : false,
            pause_drawing : false,
            other_drawing : false,
            redrawing : false,
            refreshing : false,
            color : "rgba(0,0,0,1)",
            eraser : false,
            size : 3,
            line_style_def : 1,
            lineCap : "round",
            lineJoin : "round",
            getColor : function () {
                return (this.eraser ? "rgba(255,255,255,1)" : this.color)
            }
        },
        storage : {
            timeline : [],
            drawer : null,
            current_path : null
        },
        canvas : {
            container : null,
            canvas : null,
            ctx : null
        },
        elements : {
            wb_hides_nav : $(".wb-nav-hides"),
            wb_nav_brand : $("#wb_nav_brand"),
            wb_nav_brand_spacer : $("#wb_nav_brand_spacer"),
            nav_controls : $(".wb-nav-toggle "),
            drag_drop_zone : $("#wb_drag_drop_overlay"),
            updating_overlay : $("#wb_updating_overlay"),
            updating_overlay_action : $("#updating_overlay_action"),
            enable_whiteboard_chat_btn : $("#enable_whiteboard_chat_btn"),
            whiteboard_chat_btn : $("#whiteboard_chat_btn"),
            whiteboard_videos_sidebar : $("#whiteboard_videos_sidebar"),
            enable_whiteboard_streams_btn : $("#enable_whiteboard_streams_btn"),
            whiteboard_streams_toggle_btn : $("#whiteboard_streams_toggle_btn"),
            wb_chat_unread_count : $("#wb_chat_unread_count"),
            wb_refresh_btn : $("#wb_refresh_btn"),
            err_socket : $("#wb_socket_error_nav"),
            err_socket_btn : $("#wb_socket_error_btn"),
            brush_size_btn : $("#brush_size_btn"),
            brush_style_btn : $("#brush_style_btn"),
            pattern_style_btn : $("#pattern_style_btn"),
            undo_btn : $("#wb_undo_btn"),
            redo_btn : $("#wb_redo_btn"),
            clear_btn : $("#wb_clear_btn"),
            eraser_on_btn : $("#wb_eraser_on_btn"),
            eraser_off_btn : $("#wb_eraser_off_btn"),
            color_picker_btn : $("#color_picker_btn"),
            color_picker_off_btn : $("#color_picker_off_btn"),
            wb_tutorial_mode_nav : $("#wb_tutorial_mode_nav"),
            stop_wb_tutorial_btn : $("#stop_wb_tutorial_btn"),
            start_wb_tutorial_nav : $("#start_wb_tutorial_nav"),
            wb_tutorial_mode_btn : $("#wb_tutorial_mode_btn"),
            end_wb_nav : $("#end_wb_nav"),
            end_wb_btn : $("#end_wb_btn"),
            leave_wb_btn : $("#leave_wb_btn"),
            sidenav_wb_btn : $("#sidenav_wb_btn"),
            brush_size_helper_val : $("#brush_size_helper_val"),
            wb_add_participant : $(".wb_add_participant"),
            wb_capture_tools : $(".wb-capture-tools")
        },
        timers : {
            other_drawing_timeout : null,
            busy_timeline_timeout : null,
            drag_drop_overlay_hide : null,
            timeline_long_poll : null,
            window_resized_delay : null
        }
    },
    mounted = {
        Initialize : function(){
            // placeholder
        },
        setup : function(){
            if(opt.INIT) return;
            if(!CallManager.state().call_loaded){
                setTimeout(mounted.Initialize, 500);
                return;
            }
            opt.INIT_time = dayjs();
            opt.API = opt.API + 'threads/' + CallManager.state().thread_id + '/whiteboards/'+CallManager.state().call_id;
            if(CallManager.state().demo){
                opt.DEMO = true;
                opt.API = '/api/v1/whiteboard/demo';
            }
            opt.elements.wb_hides_nav.removeClass('NS');
            if(window.localStorage.getItem('WB:popout:'+CallManager.state().call_id+':'+FlipManager.common().provider_id)){
                methods.forceStreamsHidden();
            }
            mounted.setupCanvas();
            mounted.connectChannel();
            mounted.mountUtil();
            if(opt.DEMO) mounted.runDemo();
            if(CallManager.state().call_admin) opt.elements.end_wb_nav.show();
            opt.INIT = true;
        },
        mountUtil : function(){
            if(!FlipManager.common().modules.includes('WhiteboardUtil')){
                setTimeout(mounted.mountUtil, 0);
                return;
            }
            WhiteboardUtil.mount()
        },
        disconnected : function(){
            if(opt.settings.lockout || opt.timers.timeline_long_poll) return;
            if(!CallManager.channel().state){
                opt.timers.timeline_long_poll = setInterval(Health.timelineLongPoll, 10000);
                methods.toolbarState()
            }
        },
        reconnected : function(full){
            if(full){
                opt.whiteboard_socket = null;
                mounted.connectChannel();
            }
            Health.endLongPoll();
            Health.timelineChecker()
        },
        runDemo : function(){
            methods.toolbarState();
            FlipManager.alert().Alert({
                toast : true,
                title : '<span class="h5">Welcome to the demo! Please note that your video stream is broadcasted when you click Go Live! This demo will reset every 15 minutes</span>',
                theme : "success",
                toast_options : {
                    positionClass : "toast-top-center",
                    progressBar : false,
                    timeOut : 0,
                    extendedTimeOut : 0,
                }
            });
            setTimeout(function () {
                if(FlipManager.common().modules.includes('NotifyManager')){
                    NotifyManager.settings({notifications : false});
                }
            },2000);
            setInterval(function () {
                if(opt.settings.drawing || opt.TUTORIAL) return;
                opt.settings.lockout = true;
                FlipManager.xhr().request({
                    route : opt.API,
                    success : function(data){
                        if(data && data.length !== opt.storage.timeline.length){
                            opt.storage.timeline = data;
                            Canvas.reDraw()
                        }
                        else if(!data || !data.length){
                            opt.storage.timeline = [];
                            Canvas.reDraw()
                        }
                        opt.settings.lockout = false;
                        methods.toolbarState()
                    }
                })
            },20000)
        },
        connectChannel : function(delayed){
            if(opt.whiteboard_socket || opt.DEMO) return;
            if(!CallManager.channel().state || !CallManager.channel().socket){
                if(FlipManager.format().timeDiffInUnit(dayjs(), opt.INIT_time, 's') >= 5){
                    mounted.disconnected();
                    delayed = true;
                }
                setTimeout(function () {
                    mounted.connectChannel(delayed)
                }, delayed ? 1000 : 0);
                return;
            }
            opt.whiteboard_socket = CallManager.channel().socket;
            opt.whiteboard_socket.listenForWhisper('start_draw', function(data){
                if(!opt.TUTORIAL) methods.routeIncomingWhisper(data, 0)
            })
            .listenForWhisper('draw', function(data){
                if(!opt.TUTORIAL) methods.routeIncomingWhisper(data, 1)
            })
            .listenForWhisper('end_draw', function(data){
                if(!opt.TUTORIAL) methods.routeIncomingWhisper(data, 2)
            })
            .listenForWhisper('fill_method', function(data){
                if(!opt.TUTORIAL) methods.fillCanvasBackground(data, false, null, null)
            })
            .listenForWhisper('undo_stroke', function(data){
                if(!opt.TUTORIAL) methods.undo(data, false)
            })
            .listenForWhisper('redo_stroke', function(){
                if(!opt.TUTORIAL) methods.redo(false)
            })
            .listenForWhisper('clear_draw', function(data){
                if(!opt.TUTORIAL) methods.clearWhiteboard(data, false)
            });
            if(FlipManager.format().timeDiffInUnit(dayjs(), opt.INIT_time, 's') >= 6) mounted.reconnected()
        },
        setupCanvas : function () {
            opt.canvas.container = document.getElementById("whiteboard_container");
            $(opt.canvas.container).html(templates.whiteboardCanvas());
            opt.canvas.canvas = document.getElementById("whiteboard_canvas");
            opt.canvas.ctx = opt.canvas.canvas.getContext('2d');
            Canvas.resize();
            methods.canvasUpdatingState(null, true, 'Loading Canvas');
            FlipManager.xhr().request({
                route : (opt.DEMO ? opt.API : opt.API + '/timeline'),
                success : function(data){
                    if(data && data.length){
                        opt.storage.timeline = data;
                        opt.settings.lockout = false;
                        Canvas.reDraw()
                    }
                    else{
                        methods.canvasUpdatingState(null, false);
                    }
                    methods.toolbarState();
                },
                fail : function () {
                    methods.canvasUpdatingState(null, false);
                }
            });
            if(CallManager.state().call_mode !== 4){
                let elm = document.getElementById('whiteboard_container');
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    elm.addEventListener(eventName, methods.fileDragDrop, false)
                });
            }
            opt.elements.enable_whiteboard_chat_btn.fadeIn();
            $("#whiteboard_canvas").on('pointerdown', function(e){
                mounted.canvasStart(e.offsetX, e.offsetY)
            })
            .on('pointermove', function(e){
                mounted.canvasMove(e.offsetX, e.offsetY)
            })
            .on('pointerup', function(e){
                mounted.canvasEnd(e.offsetX, e.offsetY)
            })
            .on('pointerout', function(e){
                mounted.canvasEnd(e.offsetX, e.offsetY)
            })
            .on('pointerleave', function(e){
                mounted.canvasEnd(e.offsetX, e.offsetY)
            });
            window.addEventListener("resize", Health.documentResized);
            if(opt.DEMO) opt.settings.lockout = false;
        },
        canvasStart : function (x,y) {
            if(opt.settings.lockout || opt.settings.pause_drawing){
                return;
            }
            if(opt.settings.other_drawing){
                FlipManager.alert().Alert({
                    toast : true,
                    close : true,
                    close_toast : true,
                    title : "Cannot draw while others are drawing",
                    theme : "warning",
                    toast_options : {
                        positionClass : "toast-top-center"
                    }
                });
                return;
            }
            let canvasX, canvasY;
            opt.settings.drawing = true;
            opt.storage.current_path = uuid.v4();
            canvasX = x - opt.canvas.canvas.offsetLeft;
            canvasY = y - opt.canvas.canvas.offsetTop;
            let path = methods.pathConstruct(canvasX, canvasY);
            Canvas.Lines.start(path);
            opt.storage.drawer = path;
            whispers.startDraw(path)
        },
        canvasMove : function (x,y) {
            if(opt.settings.lockout) return;
            if (opt.settings.drawing) {
                let canvasX, canvasY;
                canvasX = x - opt.canvas.canvas.offsetLeft;
                canvasY = y - opt.canvas.canvas.offsetTop;
                let path = methods.pathConstruct(canvasX, canvasY);
                Canvas.Lines.draw(path.scale, canvasX, canvasY);
                opt.storage.drawer.data.push({x : canvasX, y : canvasY});
                whispers.sendDraw(path)
            }
        },
        canvasEnd : function (x,y) {
            if(opt.settings.lockout) return;
            if (opt.settings.drawing) {
                let canvasX, canvasY;
                canvasX = x - opt.canvas.canvas.offsetLeft;
                canvasY = y - opt.canvas.canvas.offsetTop;
                let path = methods.pathConstruct(canvasX, canvasY);
                Canvas.Lines.end();
                opt.settings.drawing = false;
                opt.storage.current_path = null;
                try{
                    opt.storage.drawer.data = simplify(opt.storage.drawer.data, 1.5);
                }catch (e) {
                    console.log(e)
                }
                opt.storage.timeline.push(opt.storage.drawer);
                Canvas.saveAction(opt.storage.drawer);
                opt.storage.drawer = null;
                whispers.endDraw(path);
                methods.toolbarState()
            }
        }
    },
    Health = {
        documentResized : function(){
            if(!opt.INIT) return;
            Health.clearResizeTimer();
            opt.timers.window_resized_delay = setTimeout(Health.handleResizeAction, 200);
        },
        clearResizeTimer : function(){
            if(opt.timers.window_resized_delay){
                clearTimeout(opt.timers.window_resized_delay);
            }
            opt.timers.window_resized_delay = null;
        },
        handleResizeAction : function(){
            if(!opt.INIT) return;
            Health.clearResizeTimer();
            if(!methods.canPerformAction()){
                opt.timers.window_resized_delay = setTimeout(Health.handleResizeAction, 200);
                return;
            }
            Canvas.resize(true);
            Canvas.reDraw()
        },
        endLongPoll : function(){
            if(!opt.INIT) return;
            if(opt.timers.timeline_long_poll) clearInterval(opt.timers.timeline_long_poll);
            opt.timers.timeline_long_poll = null;
            methods.toolbarState()
        },
        timelineLongPoll : function(){
            if(!opt.INIT) return;
            if(CallManager.channel().state){
                Health.endLongPoll();
                return;
            }
            FlipManager.xhr().request({
                route : opt.API+'/timeline/length',
                success : Health.longPollResult,
                fail : null
            });
        },
        longPollResult : function(data){
            if(!methods.canPerformAction() || !opt.timers.timeline_long_poll || !opt.INIT) return;
            if(data.timeline_length && data.timeline_length > opt.storage.timeline.length){
                Health.timelineChecker()
            }
        },
        timelineChecker : function(){
            if(opt.settings.refreshing) return;
            if(!methods.canPerformAction()){
                setTimeout(Health.timelineChecker, 100);
                return;
            }
            opt.settings.refreshing = true;
            FlipManager.button().spinAction(opt.elements.wb_refresh_btn, true);
            methods.canvasUpdatingState(null, true, 'Refreshing Canvas');
            methods.toolbarState();
            Canvas.resize(true);
            FlipManager.xhr().request({
                route : (opt.DEMO ? opt.API : opt.API + '/timeline'),
                success : Health.timelineUpdater,
                fail : function () {
                    opt.settings.refreshing = false;
                    methods.canvasUpdatingState(null, false);
                    methods.toolbarState();
                    FlipManager.button().spinAction(opt.elements.wb_refresh_btn, false);
                    Canvas.reDraw();
                    Health.resumeTutorial()
                },
                fail_alert : true
            });
        },
        timelineUpdater : function(data){
            methods.canvasUpdatingState(null, false);
            if(data && data.length){
                opt.storage.timeline = data;
                Canvas.reDraw()
            }
            opt.settings.refreshing = false;
            methods.toolbarState();
            FlipManager.button().spinAction(opt.elements.wb_refresh_btn, false);
            Health.resumeTutorial();
        },
        busyHealthCheck : function(){
            if(opt.timers.busy_timeline_timeout){
                clearTimeout(opt.timers.busy_timeline_timeout);
                opt.timers.busy_timeline_timeout = null;
            }
            if(opt.TUTORIAL) return;
            if(!methods.canPerformAction()){
                opt.timers.busy_timeline_timeout = setTimeout(Health.busyHealthCheck, 2000);
                return;
            }
            Health.timelineChecker()
        },
        otherDrawingCheck : function (power, busy) {
            if(opt.timers.other_drawing_timeout){
                clearTimeout(opt.timers.other_drawing_timeout);
            }
            if(busy){
                if(opt.timers.busy_timeline_timeout){
                    clearTimeout(opt.timers.busy_timeline_timeout);
                }
                opt.timers.busy_timeline_timeout = setTimeout(Health.busyHealthCheck, 2000);
                return;
            }
            if(power){
                opt.settings.other_drawing = true;
                opt.timers.other_drawing_timeout = setTimeout(function () {
                    Health.otherDrawingCheck(false, false)
                }, 2000)
            }
            else{
                opt.timers.other_drawing_timeout = null;
                opt.settings.other_drawing = false;
                if(methods.canPerformAction()) Canvas.Lines.end()
            }
        },
        resumeTutorial : function () {
            if(FlipManager.common().modules.includes('WhiteboardHelp') && opt.TUTORIAL) WhiteboardHelp.resume()
        }
    },
    whispers = {
        startDraw : function (path) {
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('start_draw', path)
        },
        sendDraw : function (path) {
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('draw', path)
        },
        endDraw : function (path) {
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('end_draw', path)
        },
        undo : function(undo){
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('undo_stroke', undo)
        },
        redo : function(){
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('redo_stroke', {})
        },
        clear : function (clear) {
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('clear_draw', clear)
        },
        fillBackground : function (fillMethod) {
            if(!opt.whiteboard_socket || opt.TUTORIAL) return;
            opt.whiteboard_socket.whisper('fill_method', fillMethod)
        }
    },
    Canvas = {
        saveAction : function(data){
            if(opt.settings.lockout || opt.TUTORIAL) return;
            FlipManager.xhr().payload({
                route : (opt.DEMO ? opt.API : opt.API + '/timeline'),
                data : {
                    item : data
                },
                fail : function(){
                    if(!opt.DEMO){
                        setTimeout(function(){
                            Canvas.saveAction(data)
                        }, 500);
                    }
                },
                fail_alert : true
            })
        },
        reset : function(){
            opt.canvas.ctx.clearRect(0, 0, opt.canvas.container.offsetWidth - 6, opt.canvas.container.offsetHeight - 7);
        },
        resize : function(force){
            opt.canvas.canvas.width = opt.canvas.container.offsetWidth - 6;
            opt.canvas.canvas.height = opt.canvas.container.offsetHeight - 7;
            if(force) Canvas.resize(false);
        },
        reDraw : function(layered){
            if(!layered) Canvas.reset();
            if(!opt.storage.timeline.length) return methods.canvasUpdatingState(false, null);
            methods.canvasUpdatingState(true, null, 'Drawing Canvas');
            let cleared = methods.findLastClearIndex(), layer = methods.findRecentBGLayer();
            if(!layered && layer !== null
                && (cleared && layer > cleared || !cleared)
                && (!opt.storage.timeline[layer+1] || opt.storage.timeline[layer+1].type !== -1)
            ){
                Canvas.Background.fillCanvas(opt.storage.timeline[layer]);
                return;
            }
            for(let i = (cleared ? cleared : 0); i <= opt.storage.timeline.length-1; i++){
                if((opt.storage.timeline.length-1 >= i+1) && opt.storage.timeline[i+1].type === -1) continue;
                if(opt.storage.timeline[i].type === 1){
                    Canvas.Lines.start(opt.storage.timeline[i]);
                    for(let z = 0; z <= opt.storage.timeline[i].data.length - 1; z++){
                        Canvas.Lines.draw(opt.storage.timeline[i].scale, opt.storage.timeline[i].data[z].x, opt.storage.timeline[i].data[z].y);
                    }
                    Canvas.Lines.end();
                }
            }
            methods.canvasUpdatingState(false, null);
            if(!opt.settings.lockout) methods.toolbarState()
        },
        ratio : function(scale, x, y){
            return {
                x : Math.round((x/scale.width) * opt.canvas.canvas.width),
                y : Math.round((y/scale.height) * opt.canvas.canvas.height)
            }
        },
        Lines : {
            start : function (path) {
                opt.canvas.ctx.globalCompositeOperation = 'source-over';
                let ratio = Canvas.ratio(path.scale, path.data[0].x, path.data[0].y);
                opt.canvas.ctx.moveTo(ratio.x, ratio.y);
                opt.canvas.ctx.beginPath();
                opt.canvas.ctx.lineJoin = path.join;
                opt.canvas.ctx.lineCap = path.cap;
                opt.canvas.ctx.lineWidth = path.width;
                opt.canvas.ctx.strokeStyle = path.color;
                opt.canvas.ctx.lineTo(ratio.x, ratio.y);
                if(!opt.settings.redrawing) opt.canvas.ctx.stroke();
            },
            draw : function (scale, x, y) {
                opt.canvas.ctx.globalCompositeOperation = 'source-over';
                let ratio = Canvas.ratio(scale, x, y);
                opt.canvas.ctx.lineTo(ratio.x, ratio.y);
                if(!opt.settings.redrawing) opt.canvas.ctx.stroke();
            },
            end : function () {
                opt.canvas.ctx.globalCompositeOperation = 'source-over';
                if(opt.settings.redrawing) opt.canvas.ctx.stroke();
                opt.canvas.ctx.closePath()
            }
        },
        Background : {
            fillCanvas : function(fillMethod, temp){
                opt.canvas.ctx.save();
                switch (fillMethod.data.style) {
                    case 0:
                        Canvas.Background.fillColor(fillMethod.data.color, temp);
                    break;
                    case 1:
                        Canvas.Background.fillGraphPaper();
                    break;
                    case 2:
                        Canvas.Background.fillLinedPaper();
                    break;
                    case 3:
                    case 4:
                    case 5:
                        Canvas.Background.fillImage(fillMethod.data);
                    break;
                }
            },
            fillColor : function(color, temp){
                opt.canvas.ctx.globalCompositeOperation = 'destination-over';
                opt.canvas.ctx.fillStyle = color;
                opt.canvas.ctx.fillRect(0, 0, opt.canvas.ctx.canvas.width, opt.canvas.ctx.canvas.height);
                opt.canvas.ctx.restore();
                if(!temp) Canvas.reDraw(true)
            },
            fillGraphPaper : function () {
                opt.canvas.ctx.globalCompositeOperation = 'destination-over';
                let xInc = 10, yInc = 10;
                opt.canvas.ctx.lineWidth = .5;
                for(let i=yInc; i<opt.canvas.canvas.height; i+=yInc){
                    opt.canvas.ctx.strokeStyle = (i % 7 === 0 ? '#cfcfcf' : '#e7e7e7');
                    opt.canvas.ctx.beginPath();
                    opt.canvas.ctx.moveTo(0,i);
                    opt.canvas.ctx.lineTo(opt.canvas.ctx.canvas.width, i);
                    opt.canvas.ctx.stroke();
                }
                for(let z=xInc; z<opt.canvas.canvas.width; z+=xInc){
                    opt.canvas.ctx.strokeStyle = (z % 7 === 0 ? '#cfcfcf' : '#e7e7e7');
                    opt.canvas.ctx.beginPath();
                    opt.canvas.ctx.moveTo(z,0);
                    opt.canvas.ctx.lineTo(z, opt.canvas.ctx.canvas.height);
                    opt.canvas.ctx.stroke();
                }
                opt.canvas.ctx.restore();
                Canvas.reDraw(true)
            },
            fillLinedPaper : function () {
                opt.canvas.ctx.globalCompositeOperation = 'destination-over';
                let yInc = 25;
                opt.canvas.ctx.lineWidth = .8;
                for(let i=yInc; i<opt.canvas.canvas.height; i+=yInc){
                    opt.canvas.ctx.strokeStyle = '#c5d9e4';
                    opt.canvas.ctx.beginPath();
                    opt.canvas.ctx.moveTo(0,i);
                    opt.canvas.ctx.lineTo(opt.canvas.ctx.canvas.width, i);
                    opt.canvas.ctx.stroke();
                }
                opt.canvas.ctx.restore();
                Canvas.reDraw(true)
            },
            fillImage : function (data) {
                let imageObj = new Image(),
                unlock = function () {
                    opt.canvas.ctx.restore();
                    Canvas.reDraw(true)
                };
                imageObj.onload = function() {
                    opt.canvas.ctx.globalCompositeOperation = 'destination-over';
                    if([4,5].includes(data.style)){
                        opt.canvas.ctx.fillStyle = opt.canvas.ctx.createPattern(this, 'repeat');
                        opt.canvas.ctx.fillRect(0, 0, opt.canvas.canvas.width, opt.canvas.canvas.height);
                        unlock()
                    }
                    else{
                        let scale = Math.min(opt.canvas.canvas.width / this.width, opt.canvas.canvas.height / this.height),
                            x = (opt.canvas.canvas.width / 2) - (this.width / 2) * scale, y = (opt.canvas.canvas.height / 2) - (this.height / 2) * scale;
                        opt.canvas.ctx.drawImage(this, x, y, this.width * scale, this.height * scale);
                        unlock()
                    }
                };
                imageObj.onerror = function(){
                    FlipManager.alert().Alert({
                        toast : true,
                        theme : 'error',
                        title : 'Unable to load image into whiteboard',
                        toast_options : {
                            positionClass : "toast-top-center"
                        }
                    });
                    unlock()
                };
                imageObj.src = data.src;
            }
        }
    },
    templates = {
        whiteboardCanvas : function () {
            return '<canvas style="touch-action:none;" class="whiteboard-canvas rounded rounded-lg" id="whiteboard_canvas">Your browser does not support HTML5 Canvas!</canvas>'
        },
        picUploadStyle : function () {
            return '<h3 class="text-center text-dark">Select image style before uploading</h3><div class="col-12 text-center">' +
                '<button onclick="WhiteboardManager.selectBGImage(3)" data-tooltip="tooltip" title="Full screen" data-placement="left" class="btn btn-lg btn-outline-primary mr-2"><i class="fas fa-square-full fa-3x"></i></button>' +
                '<button onclick="WhiteboardManager.selectBGImage(4)" data-tooltip="tooltip" title="Repeat" data-placement="right" class="btn btn-lg btn-outline-primary"><i class="fas fa-th fa-3x"></i></button>' +
                '</div>'
        },
        bgPatterns : function () {
            return '<div class="row">' +
                '<img onclick="WhiteboardManager.selectBGImage(6)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/blackboard_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(7)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/orange_pattern.png" />' +
                '<img onclick="WhiteboardManager.selectBGImage(8)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/wood_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(9)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/wood_pattern2.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(10)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/space_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(11)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/water_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(12)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/metal_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(13)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/fence_pattern.jpg" />' +
                '<img onclick="WhiteboardManager.selectBGImage(14)" class="wb-img-pattern-pic rounded img-thumbnail" src="/images/whiteboard/circle_pattern.jpg" />' +
                '</div>'
        }
    },
    methods = {
        canvasUpdatingState : function(redraw, lockout, msg){
            if(redraw !== null) opt.settings.redrawing = redraw;
            if(lockout !== null) opt.settings.lockout = lockout;
            if(opt.TUTORIAL) return;
            opt.elements.updating_overlay_action.html(msg ? msg : '');
            redraw || lockout ? opt.elements.updating_overlay.show() : opt.elements.updating_overlay.fadeOut('fast');
        },
        routeIncomingWhisper : function(data, action){
            switch(data.type) {
                case 1:
                    switch (action) {
                        case 0:
                            methods.startDraw(data, false);
                        break;
                        case 1:
                            methods.draw(data, false);
                        break;
                        case 2:
                            methods.endDraw(data, false);
                        break;
                    }
                break;
                case 2:

                break;
                default: return;
            }
        },
        fileDragDrop : function(e){
            let isFile = function () {
                for (let i = 0; i < e.dataTransfer.items.length; i++){
                    if (e.dataTransfer.items[i].kind === "file") {
                        return true;
                    }
                }
                return false;
            };
            e.preventDefault();
            e.stopPropagation();
            if(!isFile() || opt.TUTORIAL || !methods.canPerformAction()) return;
            if(['dragenter', 'dragover'].includes(e.type)){
                if(opt.timers.drag_drop_overlay_hide) clearTimeout(opt.timers.drag_drop_overlay_hide);
                opt.elements.drag_drop_zone.fadeIn('fast');
            }
            if(e.type === 'dragleave'){
                opt.timers.drag_drop_overlay_hide = setTimeout(function () {
                    opt.elements.drag_drop_zone.fadeOut('fast')
                }, 200);
            }
            if(e.type === 'drop'){
                opt.elements.drag_drop_zone.fadeOut('fast');
                methods.sendUploadFiles(e.dataTransfer.files[0])
            }
        },
        sendUploadFiles : function(image){
            if(opt.TUTORIAL) return;
            let images = [
                    'image/jpeg',
                    'image/png',
                    'image/bmp',
                    'image/gif',
                    'image/svg+xml'
                ];
            if(!images.includes(image.type)){
                FlipManager.alert().Alert({
                    title : 'File type not supported, must be single image only',
                    toast : true,
                    theme : 'warning'
                });
                return;
            }
            let form = new FormData();
            methods.canvasUpdatingState(null, true, 'Uploading Image');
            form.append('image', image);
            form.append('id', uuid.v4());
            form.append('style', 3);
            FlipManager.xhr().payload({
                route : opt.API + '/timeline/image',
                data : form,
                success : function(x){
                    methods.canvasUpdatingState(null, false);
                    methods.fillCanvasBackground(null, true, 3, x);

                },
                fail : function(){
                    methods.canvasUpdatingState(null, false);
                },
                bypass : true,
                fail_alert : true
            })
        },
        canPerformAction : function(){
            return !(opt.settings.other_drawing
                || opt.settings.drawing
                || opt.settings.redrawing
                || opt.settings.lockout);
        },
        canReceiveLine : function(){
            return !(opt.settings.drawing
                || opt.settings.redrawing
                || opt.settings.lockout);
        },
        alertDemoLockout : function(){
            FlipManager.alert().Alert({
                toast : true,
                title : "That feature is disabled in this "+(opt.TUTORIAL ? "tutorial" : "demo"),
                theme : "warning",
                toast_options : {
                    positionClass : "toast-top-center",
                    preventDuplicates : true
                }
            })
        },
        toolbarState : function(force){
            if(opt.TUTORIAL && !force) return;
            if(CallManager.state().call_admin) opt.elements.end_wb_nav.show();
            let timeline = opt.storage.timeline.length;
            opt.settings.lockout ? opt.elements.nav_controls.prop("disabled", true).addClass('disabled') : opt.elements.nav_controls.prop("disabled", false).removeClass('disabled');
            if(opt.settings.refreshing) return;
            if(!timeline){
                opt.elements.undo_btn.show();
                opt.elements.redo_btn.hide();
                opt.elements.undo_btn.prop("disabled", true);
                opt.elements.clear_btn.prop("disabled", true)
            }
            else if(opt.storage.timeline[timeline-1].type === -1){
                opt.elements.undo_btn.hide();
                opt.elements.redo_btn.show();
                opt.elements.undo_btn.prop("disabled", true);
                opt.elements.clear_btn.prop("disabled", false)
            }
            else if(opt.storage.timeline[timeline-1].type === 0){
                opt.elements.undo_btn.show();
                opt.elements.redo_btn.hide();
                opt.elements.undo_btn.prop("disabled", true);
                opt.elements.clear_btn.prop("disabled", true)
            }
            else {
                opt.elements.undo_btn.show();
                opt.elements.redo_btn.hide();
                opt.elements.undo_btn.prop("disabled", false);
                opt.elements.clear_btn.prop("disabled", false)
            }
            if(opt.timers.timeline_long_poll){
                opt.elements.err_socket.show();
                opt.elements.err_socket_btn.popover()
            }
            else{
                opt.elements.err_socket.hide()
            }
            if(opt.settings.eraser){
                opt.elements.eraser_on_btn.hide();
                opt.elements.eraser_off_btn.show();
                opt.elements.color_picker_btn.hide();
                opt.elements.color_picker_off_btn.show();
            }
            else{
                opt.elements.eraser_on_btn.show();
                opt.elements.eraser_off_btn.hide();
                opt.elements.color_picker_btn.show();
                opt.elements.color_picker_off_btn.hide();
            }
            if(opt.TUTORIAL){
                opt.elements.wb_refresh_btn.prop("disabled", true).addClass('disabled');
            }
            else{
                opt.elements.wb_refresh_btn.prop("disabled", false).removeClass('disabled');
                opt.elements.wb_tutorial_mode_nav.hide();
            }
            PageListeners.listen().tooltips()
        },
        findLastClearIndex : () => {
            let clear = null;
            opt.storage.timeline.forEach((item, index) => {
                if(item.type === 0) clear = index
            });
            return clear
        },
        findRecentBGLayer : () => {
            let layer = null;
            opt.storage.timeline.forEach((item, index) => {
                if(item.type === 20) layer = index
            });
            return layer
        },
        pathConstruct : function(x,y){
            return {
                id : opt.storage.current_path,
                type : 1,
                color : opt.settings.getColor(),
                width : parseInt(opt.settings.size),
                cap : opt.settings.lineCap,
                join : opt.settings.lineJoin,
                data : [ {x : x, y : y} ],
                scale : {
                    width: opt.canvas.canvas.width,
                    height: opt.canvas.canvas.height
                }
            }
        },
        selectBGImage : function(type){
            let upload_input = $("#wb_image_file"),
            runFill = function (src) {
                methods.fillCanvasBackground(null, true, 5, src);
                $(".modal").modal("hide")
            };
            switch(type){
                case 0:
                    if(opt.DEMO || opt.TUTORIAL){
                        methods.alertDemoLockout();
                        return;
                    }
                    FlipManager.alert().Modal({
                        centered : true,
                        backdrop_ctrl : false,
                        size : 'sm',
                        title : 'Upload Background',
                        icon : 'cloud-upload-alt',
                        theme : 'primary',
                        h4 : false,
                        unlock_buttons : false,
                        body : templates.picUploadStyle(),
                        onReady : function () {
                            PageListeners.listen().tooltips()
                        },
                        onClosed : function () {
                            upload_input.off('change')
                        }
                    });
                break;
                case 3:
                case 4:
                    if(opt.DEMO){
                        methods.alertDemoLockout();
                        return;
                    }
                    upload_input.click();
                    upload_input.one('change', function () {
                        FlipManager.alert().fillModal({loader : true, body : null, title : 'Uploading'});
                        methods.uploadImage(type)
                    });
                break;
                case 5:
                    FlipManager.alert().Modal({
                        overflow : true,
                        size : 'lg',
                        title : 'Select Background Pattern',
                        icon : 'puzzle-piece',
                        theme : 'primary',
                        h4 : false,
                        unlock_buttons : false,
                        body : templates.bgPatterns()
                    });
                break;
                case 6: runFill('/images/whiteboard/blackboard_pattern.jpg'); break;
                case 7: runFill('/images/whiteboard/orange_pattern.png'); break;
                case 8: runFill('/images/whiteboard/wood_pattern.jpg'); break;
                case 9: runFill('/images/whiteboard/wood_pattern2.jpg'); break;
                case 10: runFill('/images/whiteboard/space_pattern.jpg'); break;
                case 11: runFill('/images/whiteboard/water_pattern.jpg'); break;
                case 12: runFill('/images/whiteboard/metal_pattern.jpg'); break;
                case 13: runFill('/images/whiteboard/fence_pattern.jpg'); break;
                case 14: runFill('/images/whiteboard/circle_pattern.jpg'); break;
            }
        },
        uploadImage : function(type){
            if(opt.TUTORIAL) return;
            let form = new FormData(), formElm = $("#wb_image_upload"), imgElm = $('#wb_image_file'), modal = $(".modal");
            if(!imgElm[0].files.length) return;
            methods.canvasUpdatingState(null, true, 'Uploading Image');
            form.append('image', imgElm[0].files[0]);
            form.append('id', uuid.v4());
            form.append('style', type);
            FlipManager.xhr().payload({
                route : opt.API + '/timeline/image',
                data : form,
                success : function(x){
                    modal.modal("hide");
                    formElm[0].reset();
                    methods.canvasUpdatingState(null, false);
                    methods.fillCanvasBackground(null, true, type, x);

                },
                fail : function(){
                    modal.modal("hide");
                    methods.canvasUpdatingState(null, false);
                    formElm[0].reset()
                },
                bypass : true,
                fail_alert : true
            })
        },
        fillCanvasBackground : function(data, init, type, item){
            let fillMethod = data;
            if(init){
                if(![0,1,2,3,4,5].includes(type)
                    || !methods.canPerformAction()){
                    return;
                }
                if(![3,4].includes(type)){
                    fillMethod = {
                        id : uuid.v4(),
                        type : 20,
                        data : {
                            style : type,
                            color : opt.settings.getColor(),
                            src : item
                        }
                    };
                }
                else{
                    fillMethod = item;
                }
                whispers.fillBackground(fillMethod);
            }
            opt.storage.timeline.push(fillMethod);
            if(init && ![3,4].includes(type)) Canvas.saveAction(fillMethod);
            Canvas.reDraw();
            methods.toolbarState()
        },
        undo : function(data, init){
            let undo = data;
            if(init){
                if(!opt.storage.timeline.length
                    || [-1,0].includes(opt.storage.timeline[(opt.storage.timeline.length-1)].type)
                    || !methods.canPerformAction()){
                    return;
                }
                undo = {
                    id : uuid.v4(),
                    type : -1
                };
                whispers.undo(undo);
            }
            opt.storage.timeline.push(undo);
            if(init) Canvas.saveAction(undo);
            Canvas.reDraw()
        },
        redo : function(init){
            if(init){
                if(!opt.storage.timeline.length
                    || opt.storage.timeline[(opt.storage.timeline.length-1)].type !== -1
                    || !methods.canPerformAction()){
                    return;
                }
                whispers.redo();
                Canvas.saveAction({
                    id : uuid.v4(),
                    type : -2
                })
            }
            opt.storage.timeline.pop();
            Canvas.reDraw()
        },
        setStrokeSize : function(size){
            if(size < 1 || size > 100) return;
            opt.settings.size = size;
            opt.elements.brush_size_helper_val.html(size)
        },
        setLineStyle : function(style){
            let btn = $("#brush_style_btn");
            switch (style) {
                case 1:
                    opt.settings.lineCap = "round";
                    opt.settings.lineJoin = "round";
                    opt.settings.line_style_def = 1;
                    btn.html('<i class="fas fa-paint-brush fa-2x"></i>');
                break;
                case 2:
                    opt.settings.lineCap = "butt";
                    opt.settings.lineJoin = "round";
                    opt.settings.line_style_def = 2;
                    btn.html('<i class="fas fa-brush fa-2x"></i>');
                break;
            }
        },
        setStrokeColor : function(rgba){
            opt.settings.color = "rgba("+rgba[0]+","+rgba[1]+","+rgba[2]+","+rgba[3]+")";
        },
        startDraw : function(path){
            if(!methods.canReceiveLine()){
                return Health.otherDrawingCheck(null, true);
            }
            Health.otherDrawingCheck(true, false);
            Canvas.Lines.start(path);
            opt.storage.drawer = path;
        },
        draw : function (path){
            if(!methods.canReceiveLine() || !opt.storage.drawer){
                return Health.otherDrawingCheck(null, true);
            }
            Health.otherDrawingCheck(true, false);
            Canvas.Lines.draw(path.scale, path.data[0].x, path.data[0].y);
            opt.storage.drawer.data.push({x : path.data[0].x, y : path.data[0].y});
        },
        endDraw : function (path){
            if(!methods.canReceiveLine() || !opt.storage.drawer){
                return Health.otherDrawingCheck(null, true);
            }
            Canvas.Lines.end();
            opt.storage.timeline.push(opt.storage.drawer);
            opt.storage.drawer = null;
            Health.otherDrawingCheck(false, false);
            methods.toolbarState()
        },
        confirmClearWhiteboard : function(){
            if(!opt.storage.timeline.length
                || opt.storage.timeline[(opt.storage.timeline.length-1)].type === 0
                || !methods.canPerformAction()){
                return;
            }
            FlipManager.alert().Modal({
                size : 'sm',
                body : false,
                centered : true,
                unlock_buttons : false,
                title: 'Really clear whiteboard?',
                theme: 'danger',
                cb_btn_txt: 'Clear',
                cb_btn_theme : 'danger',
                cb_btn_icon : 'trash',
                icon : 'trash',
                callback : function(){
                    methods.clearWhiteboard(false, true)
                },
                cb_close : true
            })
        },
        clearWhiteboard : function (data, init){
            let clear = data;
            if(init){
                if(!opt.storage.timeline.length
                    || opt.storage.timeline[(opt.storage.timeline.length-1)].type === 0
                    || !methods.canPerformAction()){
                    return;
                }
                clear = {
                    id : uuid.v4(),
                    type : 0
                };
                whispers.clear(clear);
            }
            opt.settings.other_drawing = false;
            opt.settings.drawing = false;
            Canvas.reset();
            opt.storage.timeline.push(clear);
            if(init) Canvas.saveAction(clear);
            methods.toolbarState()
        },
        downloadWBCapture : function(){
            if(opt.TUTORIAL) return;
            if(!methods.canPerformAction()) return;
            methods.canvasUpdatingState(true, null, 'Capturing Canvas');
            Canvas.Background.fillCanvas({data : {style : 0, color : "rgba(255,255,255,1)"}}, true);
            let temp_img = new Image();
            temp_img.onload = function(e){
                let element = document.createElement('a'), time = new Date();
                element.setAttribute('href', this.src);
                element.setAttribute('download', 'whiteboard_'+time.getTime()+'.jpg');
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                setTimeout(function () {
                    document.body.removeChild(element);
                    Canvas.reDraw()
                }, 1000);
            };
            temp_img.onerror = function(e){
                Canvas.reDraw()
            };
            temp_img.src = opt.canvas.canvas.toDataURL('image/jpeg', 0.5);
        },
        uploadWBCapture : function(init){
            if(opt.DEMO){
                methods.alertDemoLockout();
                return;
            }
            if(opt.TUTORIAL) return;
            let btn = $("#wb_capture_upload_btn");
            if(init){
                if(!methods.canPerformAction()) return;
                btn.prop('disabled', true);
                methods.canvasUpdatingState(true, null, 'Capturing Canvas');
                Canvas.Background.fillCanvas({data : {style : 0, color : "rgba(255,255,255,1)"}}, true);
                opt.canvas.canvas.toBlob(function(blob){
                    ThreadManager.Import().whiteboardCapture({blob : blob});
                    setTimeout(Canvas.reDraw, 1500)
                },  'image/jpeg', 0.5);
            }
            else{
                setTimeout(function () {
                    btn.prop('disabled', false)
                }, 5000)
            }
        },
        endWhiteboard : function(){
            if(opt.TUTORIAL) return;
            if(CallManager.state().call_admin){
                FlipManager.alert().Modal({
                    size : 'sm',
                    body : false,
                    centered : true,
                    unlock_buttons : false,
                    title: 'End Whiteboard?',
                    theme: 'danger',
                    cb_btn_txt: 'End Now',
                    cb_btn_theme : 'danger',
                    cb_btn_icon : 'window-close',
                    icon : 'chalkboard-teacher',
                    callback : function(){
                        methods.leaveWhiteboard(true);
                        CallManager.endCall()
                    },
                    cb_close : true
                })
            }
        },
        leaveWhiteboard : function (force){
            if(opt.TUTORIAL) return;
            opt.INIT = false;
            methods.sideNavToggle(true);
            if(FlipManager.common().modules.includes('JanusServer')) JanusServer.config().destroy();
            $("#wb_main_nav").hide();
            $("#whiteboard-right-nav").hide();
            opt.elements.whiteboard_videos_sidebar.hide();
            opt.elements.enable_whiteboard_streams_btn.hide();
            opt.elements.enable_whiteboard_chat_btn.hide();
            opt.elements.whiteboard_chat_btn.hide();
            opt.elements.wb_chat_unread_count.hide();
            opt.settings.lockout = true;
            if(FlipManager.common().modules.includes('ThreadManager') && ThreadManager.state().thread_id){
                ThreadManager.toggle()
            }
            Canvas.resize();
            opt.canvas.ctx.fillStyle = "rgba(0, 0, 0, .8)";
            opt.canvas.ctx.fillRect(0, 0, opt.canvas.ctx.canvas.width, opt.canvas.ctx.canvas.height);
            FlipManager.alert().Modal({
                allow_close : false,
                size : 'sm',
                theme : 'success',
                icon : 'chalkboard-teacher',
                centered : true,
                title : (force ? 'Whiteboard Ending' : 'Exiting Whiteboard'),
                pre_loader : true
            });
            window.localStorage.removeItem('WB:popout:'+CallManager.state().call_id+':'+FlipManager.common().provider_id, true);
            if(!force){
                opt.DEMO ? window.location.replace('/whiteboard') : CallManager.leave(false)
            }
        },
        toggleEraser : function(power){
            opt.settings.eraser = power;
            methods.toolbarState()
        },
        toggleChat : function (power, force) {
            if(opt.TUTORIAL && !force) return;
            if(opt.DEMO && FlipManager.common().modules.includes('ThreadTemplates')){
                let main = $("#message_sidebar_container"), fill = $("#message_container"),
                redraw = function () {
                    Canvas.resize(true);
                    Canvas.reDraw()
                };
                if(power){
                    opt.elements.enable_whiteboard_chat_btn.hide();
                    main.show();
                    fill.html(ThreadTemplates.render().loading_thread_base(true));
                    redraw()
                }
                else{
                    main.hide();
                    fill.html('');
                    opt.elements.enable_whiteboard_chat_btn.fadeIn();
                    redraw()
                }
                return;
            }
            if(FlipManager.common().modules.includes('ThreadManager')){
                let toggle = function(){
                    ThreadManager.toggle(function () {
                        Canvas.resize(true);
                        Canvas.reDraw()
                    });
                };
                if(power){
                    if(!ThreadManager.state().thread_id) toggle();
                    opt.elements.enable_whiteboard_chat_btn.hide();
                    opt.elements.wb_chat_unread_count.hide()
                }
                else{
                    if(ThreadManager.state().thread_id) toggle();
                    opt.elements.enable_whiteboard_chat_btn.fadeIn()
                }
            }
        },
        toggleStreams : function(power, force, popout){
            if(opt.TUTORIAL && !force) return;
            if(!opt.TUTORIAL && window.localStorage.getItem('WB:popout:'+CallManager.state().call_id+':'+FlipManager.common().provider_id)){
                methods.forceStreamsHidden(true);
                return;
            }
            if(power){
                opt.settings.streams_visible = true;
                opt.elements.enable_whiteboard_streams_btn.hide();
                opt.elements.whiteboard_videos_sidebar.show()
            }
            else{
                opt.settings.streams_visible = false;
                opt.elements.whiteboard_videos_sidebar.hide();
                if(popout !== true) opt.elements.enable_whiteboard_streams_btn.fadeIn()
            }
            Canvas.resize(true);
            Canvas.reDraw()
        },
        forceStreamsHidden : function(resize){
            opt.settings.streams_visible = false;
            opt.elements.enable_whiteboard_streams_btn.hide();
            opt.elements.whiteboard_videos_sidebar.hide();
            if(resize){
                Canvas.resize(true);
                Canvas.reDraw()
            }
        },
        sideNavToggle : function (close, force) {
            if(opt.TUTORIAL && !force) return;
            let nav = document.getElementById('wb_side_nav');
            if((!nav.style.width || nav.style.width === '0px') && !close){
                nav.style.width = '65px';
                nav.style.boxShadow = '-5px -5px 5px 1px #333';
            }
            else if(!opt.TUTORIAL || force && close){
                nav.style.width = '0px';
                nav.style.boxShadow = '';
            }
        },
        tutorialProxy : function(arg){
            if(!opt.TUTORIAL) return;
            if(arg.action === 'reset'){
                opt.storage.timeline = [];
            }
            if(arg.action === 'line'){
                opt.storage.timeline.push(arg.line)
            }
            if(arg.action === 'redraw'){
                Canvas.reDraw()
            }
            if(arg.action === 'resize'){
                Canvas.resize(true)
            }
        },
        tutorial : function (power){
            if(!FlipManager.common().modules.includes('WhiteboardHelp')){
                FlipManager.alert().Alert({
                    toast : true,
                    theme : 'error',
                    title : 'Tutorial module not loaded'
                });
                return;
            }
            if(power){
                opt.INIT = false;
                methods.canvasUpdatingState(null, true);
                opt.TUTORIAL = true;
                if(FlipManager.common().modules.includes('ThreadManager') && ThreadManager.state().thread_id){
                    methods.toggleChat(false, true);
                    setTimeout(function () {
                        methods.tutorial(true)
                    }, 0);
                    return;
                }
                if(opt.settings.streams_visible){
                    methods.toggleStreams(false, true);
                    setTimeout(function () {
                        methods.tutorial(true)
                    }, 0);
                    return;
                }
                if(opt.DEMO) methods.toggleChat(false, true);
                if(opt.settings.eraser) methods.toggleEraser(false);
                methods.toolbarState(true);
                WhiteboardHelp.setup();
                return
            }
            WhiteboardHelp.shutdown();
            opt.TUTORIAL = false;
            opt.INIT = true;
            methods.canvasUpdatingState(null, false);
            methods.toolbarState();
            Health.timelineChecker();
        }
    };
    return {
        init : mounted.Initialize,
        setup : mounted.setup,
        sideNav : methods.sideNavToggle,
        clear : methods.confirmClearWhiteboard,
        refresh : Health.timelineChecker,
        setLineStyle : methods.setLineStyle,
        setSize : methods.setStrokeSize,
        setColor : methods.setStrokeColor,
        leave : methods.leaveWhiteboard,
        end : methods.endWhiteboard,
        toggleEraser : methods.toggleEraser,
        toggleChat : methods.toggleChat,
        toggleStreams : methods.toggleStreams,
        tutorial : methods.tutorial,
        setState : methods.canvasUpdatingState,
        toolbar : methods.toolbarState,
        proxy : methods.tutorialProxy,
        undo : function(){
            methods.undo(false,true)
        },
        redo : function(){
            methods.redo(true)
        },
        fillBG : function(type){
            methods.fillCanvasBackground(null, true, type, null)
        },
        selectBGImage : methods.selectBGImage,
        downloadCapture : methods.downloadWBCapture,
        uploadCapture : methods.uploadWBCapture,
        state : function () {
            return {
                tutorial : opt.TUTORIAL,
                demo : opt.DEMO,
                stroke_size : opt.settings.size,
                stroke_color : opt.settings.color,
                stroke_style : opt.settings.line_style_def,
                timeline : opt.storage.timeline,
                settings : opt.settings,
                elements : opt.elements
            }
        },
        socket : function () {
            return {
                onDisconnect : mounted.disconnected,
                onReconnect : mounted.reconnected
            }
        }
    };
}());
*/