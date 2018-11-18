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
    title: '<b/>Percepción sobre las tareas del hogar:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que tienden a estar de acuerdo en que los hombres están menos calificados<br />que las mujeres para realizar las tareas del hogar<br />\
    <img src="styles/legend/Tareasdelhogar_0_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Tareasdelhogar_0_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Tareasdelhogar_0_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Tareasdelhogar_0_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Tareasdelhogar_0_4.png" /> 80 - 100<br />'
        });

lyr_Tareasdelhogar_0.setVisible(true);
var layersList = [baseLayer,lyr_Tareasdelhogar_0];
lyr_Tareasdelhogar_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Tiendo a e': 'Tiendo a e', 'E48_Tiendo': 'E48_Tiendo', });
lyr_Tareasdelhogar_0.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Tiendo a e': 'TextEdit', 'E48_Tiendo': 'TextEdit', });
lyr_Tareasdelhogar_0.set('fieldLabels', {'Codigo': 'no label', 'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Tiendo a e': 'no label', 'E48_Tiendo': 'no label', });
lyr_Tareasdelhogar_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});