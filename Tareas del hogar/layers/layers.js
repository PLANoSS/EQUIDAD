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
var format_Tareasdelhogar_0 = new ol.format.GeoJSON();
var features_Tareasdelhogar_0 = format_Tareasdelhogar_0.readFeatures(json_Tareasdelhogar_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tareasdelhogar_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tareasdelhogar_0.addFeatures(features_Tareasdelhogar_0);var lyr_Tareasdelhogar_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tareasdelhogar_0, 
                style: style_Tareasdelhogar_0,
    title: '<b/>Percepción sobre las tareas del hogar:</b><br />El degradado de colores en el mapa indica el porcentaje<br />de personas que <b/>tienden a estar de acuerdo</b> en que los<br />hombres están menos capacitados para realizar las tareas<br />del hogar.<br /><br />\
    <img src="styles/legend/Tareasdelhogar_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Tareasdelhogar_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Tareasdelhogar_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Tareasdelhogar_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Tareasdelhogar_0_4.png" />  80 - 100 <br />'
        });

lyr_Tareasdelhogar_0.setVisible(true);
var layersList = [baseLayer,lyr_Tareasdelhogar_0];
lyr_Tareasdelhogar_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Año': 'Año', 'Tiendo a estar de acuerdo (%)': 'Tiendo a estar de acuerdo (%)', });
lyr_Tareasdelhogar_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Año': 'TextEdit', 'Tiendo a estar de acuerdo (%)': 'Hidden', });
lyr_Tareasdelhogar_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Grafica': 'no label', 'Año': 'header label', });
lyr_Tareasdelhogar_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});