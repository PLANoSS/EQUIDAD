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
var format_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2 = new ol.format.GeoJSON();
var features_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2 = format_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.readFeatures(json_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.addFeatures(features_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2);var lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2, 
                style: style_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2,
    title: '<b/>Percepción sobre la inclusión laboral:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que asegurar beneficios sociales puede incluir a la población<br />en el mercado laboral.<br />\
    <img src="styles/legend/Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.setVisible(true);
var layersList = [baseLayer,lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2];
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Asegurándo': 'Asegurándo', });
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Asegurándo': 'TextEdit', });
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Asegurándo': 'no label', });
