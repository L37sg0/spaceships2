//Gauges

var GaugeAliens = {
    initialize  : function(){
    },
    update      : function(){
        gaugeAliensText.setText(gaugeAliensText.text + 1);
    },
    delete      : function(){
        gaugeAliensText.destroy();
    }
}