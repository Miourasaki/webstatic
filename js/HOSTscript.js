(function () {
    "use strict";
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");
    let SIN60 = Math.sin((Math.PI * 1) / 3);
    let COS60 = Math.cos((Math.PI * 1) / 3);
    let TAN60 = Math.tan((Math.PI * 1) / 3);
    let width = null;
    let height = null;
    let widthDest = null;
    let heightDest = null;
    let widthOffset = null;
    let heightOffset = null;
    let realWidth = null;
    let fontSize = null;
    let measuredSize = null;
    let fontLoaded = false;
    let animationFrameRequest = null;
    let title = window.location.host;
    let subtitle = "© 2022-" + new Date().getFullYear();
    let themeColor = document.querySelector('meta[name="theme-color"]').getAttribute('content')
    let textOffset = [0, 0];
    let dpr = window.devicePixelRatio || 1;
    let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(callback, 1000 / 60);
        };
    let cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        function (id) {
            return clearTimeout(id);
        };
    function resizeCanvas() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
    }
    function calcSize() {
        width = canvas.width;
        height = canvas.height;
        widthDest = height * TAN60;
        heightDest = width / TAN60;
        widthOffset = (width - widthDest) / 2;
        heightOffset = (height - heightDest) / 2;
        realWidth =
            widthOffset > 0 ? (width - 2 * widthOffset) / SIN60 : width / SIN60;
        fontSize = (width > height ? width : height) * 0.08;
    }
    function clearCanvas() {
        context.clearRect(0, 0, width, height);
    }
    function drawBackground() {
        if (widthOffset > 0) {
            context.beginPath();
            context.fillStyle = themeColor;
            context.moveTo(0, 0);
            context.lineTo(0, height);
            context.lineTo(
                widthOffset + textOffset[0] * 0.2 + textOffset[1] * TAN60 * 0.2,
                height
            );
            context.lineTo(
                widthDest +
                widthOffset +
                textOffset[0] * 0.2 +
                textOffset[1] * TAN60 * 0.2,
                0
            );
            context.fill();
            context.beginPath();
            context.fillStyle = "#ffffff";
            context.moveTo(width, 0);
            context.lineTo(width, height);
            context.lineTo(
                widthOffset + textOffset[0] * 0.2 + textOffset[1] * TAN60 * 0.2,
                height
            );
            context.lineTo(
                widthDest +
                widthOffset +
                textOffset[0] * 0.2 +
                textOffset[1] * TAN60 * 0.2,
                0
            );
            context.fill();
        } else {
            context.beginPath();
            context.fillStyle = themeColor;
            context.moveTo(0, 0);
            context.lineTo(width, 0);
            context.lineTo(
                width,
                heightOffset + textOffset[1] * 0.2 + (textOffset[0] / TAN60) * 0.2
            );
            context.lineTo(
                0,
                heightDest +
                heightOffset +
                textOffset[1] * 0.2 +
                (textOffset[0] / TAN60) * 0.2
            );
            context.fill();
            context.beginPath();
            context.fillStyle = "#ffffff";
            context.moveTo(0, height);
            context.lineTo(width, height);
            context.lineTo(
                width,
                heightOffset + textOffset[1] * 0.2 + (textOffset[0] / TAN60) * 0.2
            );
            context.lineTo(
                0,
                heightDest +
                heightOffset +
                textOffset[1] * 0.2 +
                (textOffset[0] / TAN60) * 0.2
            );
            context.fill();
        }
    }
    function drawText() {
        context.save();
        context.translate(textOffset[0], textOffset[1]);
        context.rotate((-Math.PI * 1) / 6);
        context.font = fontSize + "px Lemonada";
        let exceedXOffset =
            (heightOffset < 0 ? height : height - heightOffset) * COS60;
        let xOffset = (fontSize * 2) / TAN60 - exceedXOffset + fontSize;
        let xOffsetLeftExceed =
            2 * (exceedXOffset + xOffset) -
            fontSize +
            context.measureText(title).width -
            realWidth;
        let xOffsetRightExceed =
            exceedXOffset +
            xOffset -
            1.5 * fontSize +
            context.measureText(subtitle).width -
            realWidth;
        if (xOffsetLeftExceed < 0 || width > height) {
            xOffsetLeftExceed = 0;
        }
        if (xOffsetRightExceed < 0 || width > height) {
            xOffsetRightExceed = 0;
        }
        let xOffsetTitle = xOffset - xOffsetLeftExceed / 2;
        let xOffsetSubtitle =
            realWidth - exceedXOffset + xOffset + xOffsetRightExceed / 2;
        let yOffsetTitle = (heightDest + heightOffset) * SIN60 - fontSize * 0.5;
        let yOffsetSubtitle = yOffsetTitle + 1.5 * fontSize;
        if (widthOffset > 0) {
            xOffsetSubtitle += widthOffset / SIN60;
        }
        context.fillStyle = "#ffffff";
        context.textAlign = "left";
        context.fillText(title, xOffsetTitle, yOffsetTitle);
        context.fillStyle = themeColor;
        context.textAlign = "right";
        context.font = fontSize * 0.75 + "px Lemonada";
        context.fillText(subtitle, xOffsetSubtitle, yOffsetSubtitle);
        context.restore();
    }
    function draw() {
        resizeCanvas();
        calcSize();
        clearCanvas();
        drawBackground();
        drawText();
        if (fontLoaded) return;
        context.font = '48px Lemonada, "Times New Roman"';
        let curMeasuredSize = context.measureText("loli.com").width;
        if (!measuredSize) {
            measuredSize = curMeasuredSize;
            animationFrameRequest = requestAnimationFrame(draw);
        } else if (measuredSize !== curMeasuredSize || curMeasuredSize > 200) {
            cancelAnimationFrame(animationFrameRequest);
        } else {
            animationFrameRequest = requestAnimationFrame(draw);
        }
    }
    context.scale(dpr, dpr);
    window.onresize = draw;
    window.onmousemove = window.ontouchmove = function (event) {
        let clientX =
            (event.clientX
                ? event.clientX
                : event.changedTouches
                    ? event.changedTouches[0].clientX
                    : width / 2) * dpr;
        let clientY =
            (event.clientY
                ? event.clientY
                : event.changedTouches
                    ? event.changedTouches[0].clientY
                    : height / 2) * dpr;
        if (clientX < 0) {
            clientX = 0;
        } else if (clientX > width) {
            clientX = width;
        }
        if (clientY < 0) {
            clientY = 0;
        } else if (clientY > height) {
            clientY = height;
        }
        textOffset[0] =
            ((Math.asin((clientX * 2 - width) / width) * 2) / Math.PI) *
            fontSize *
            0.35;
        textOffset[1] =
            ((Math.asin((clientY * 2 - height) / height) * 2) / Math.PI) *
            fontSize *
            0.35;
        clearCanvas();
        drawBackground();
        drawText();
    };
    animationFrameRequest = requestAnimationFrame(draw);
})();
