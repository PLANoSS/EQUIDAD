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
var format_Anhaydesigualdadesentrehombresymujeres_3 = new ol.format.GeoJSON();
var features_Anhaydesigualdadesentrehombresymujeres_3 = format_Anhaydesigualdadesentrehombresymujeres_3.readFeatures(json_Anhaydesigualdadesentrehombresymujeres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anhaydesigualdadesentrehombresymujeres_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Anhaydesigualdadesentrehombresymujeres_3.addFeatures(features_Anhaydesigualdadesentrehombresymujeres_3);var lyr_Anhaydesigualdadesentrehombresymujeres_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anhaydesigualdadesentrehombresymujeres_3, 
                style: style_Anhaydesigualdadesentrehombresymujeres_3,
    title: '<b/>Percepción sobre desigualdades:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que piensan que sí, hay todavía algunas desigualdades entre hombres<br />y mujeres.<br />\
    <img src="styles/legend/Anhaydesigualdadesentrehombresymujeres_3_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Anhaydesigualdadesentrehombresymujeres_3_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Anhaydesigualdadesentrehombresymujeres_3_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Anhaydesigualdadesentrehombresymujeres_3_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Anhaydesigualdadesentrehombresymujeres_3_4.png" />  80 - 100 <br /><br />'
        });

lyr_Anhaydesigualdadesentrehombresymujeres_3.setVisible(true);
var layersList = [baseLayer,lyr_Anhaydesigualdadesentrehombresymujeres_3];
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Si, hay mu': 'Si, hay mu', });
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Si, hay mu': 'TextEdit', });
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Si, hay mu': 'no label', });
