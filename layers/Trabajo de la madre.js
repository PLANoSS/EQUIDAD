var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7 = new ol.format.GeoJSON();
var features_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7 = format_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.readFeatures(json_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.addFeatures(features_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7);var lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7, 
                style: style_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7,
    title: '<b/>Percepción sobre el trabajo de la madre a tiempo completo:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran totalmente de acuerdo  con que toda la familia<br />sufre cuando la madre tiene trabajo a tiempo completo<br />\
    <img src="styles/legend/Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7_4.png" />  80 - 100 <br /><br />'
        });

lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.setVisible(true);
var layersList = [baseLayer,lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7];
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Totalmente': 'Totalmente', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Totalmente': 'TextEdit', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Totalmente': 'no label', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});