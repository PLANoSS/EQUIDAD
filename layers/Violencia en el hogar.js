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
var format_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1 = new ol.format.GeoJSON();
var features_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1 = format_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.readFeatures(json_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.addFeatures(features_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1);var lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1, 
                style: style_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1,
    title: '<b/>Percepción sobre la violencia en el hogar:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que entienden como “violencia en el hogar” a la violencia física entre<br />miembros de la familia. <br />\
    <img src="styles/legend/Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1_4.png" />  80 - 100 <br />'
        });

lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.setVisible(true);
var layersList = [baseLayer,lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1];
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Violencia': 'Violencia', });
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Violencia': 'TextEdit', });
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Violencia': 'no label', });