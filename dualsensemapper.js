let image = $('#dualsenseImg');
    let newToolTip;
    image.mapster({
        fillOpacity: 0.3,
        fillColor: "31a7cb",
        stroke: true,
        strokeColor: "3320FF",
        strokeOpacity: 0,
        strokeWidth: 4,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
        scaleMap: true,
        onMouseover: function (e) {
        },
        onClick: function (e) {
            image.mapster('tooltip', e.key);
        },
        areas: [{
            key: "d_pad_right",
            toolTip: "A new D-Pad with the best response time you've ever seen!"
        },
        {
            key: "d_pad_left",
            toolTip: "A new D-Pad with the best response time you've ever seen!"
        }, {
            key: "d_pad_up",
            toolTip: "A new D-Pad with the best response time you've ever seen!"
        }, {
            key: "d_pad_down",
            toolTip: "A new D-Pad with the best response time you've ever seen!"
        }, {
            key: "l_stick",
            toolTip: "<b></b> are sometimes sweeter."
        }, {
            key: "r_stick",
            toolTip: "<b></b> are sometimes sweeter."
        }, {
            key: "square",
            toolTip: "Classic Square Button",
        }, {
            key: "triangle",
            toolTip: "Classic Triangle Button",
        }, {
            key: "circle",
            toolTip: "Classic Circle Button",
        }, {
            key: "cross",
            toolTip: "Classic Cross Button",
        }, {
            key: "touchpad",
            toolTip: "Touchpad",
        }, {
            key: "select",
            toolTip: "Create Button, this will pioneer new ways for players to create epic gameplay content to share with the world, or just to enjoy for themselves."
        }, {
            key: "start",
            toolTip: "Your usual options button with a much cleaner look and better feel to the touch"
        }, {
            key: "r_trigger",
            toolTip: "Right Trigger",
        }, {
            key: "l_trigger",
            toolTip: "Left Trigger",
        }],
        showToolTip: true,
        toolTipClose: ["tooltip-click", "area-mouseout"],

    });