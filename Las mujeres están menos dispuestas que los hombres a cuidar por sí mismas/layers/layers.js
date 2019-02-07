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
var format_Lasmujeresestnmenosdispuestasacuidarporsmismos_0 = new ol.format.GeoJSON();
var features_Lasmujeresestnmenosdispuestasacuidarporsmismos_0 = format_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.readFeatures(json_Lasmujeresestnmenosdispuestasacuidarporsmismos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lasmujeresestnmenosdispuestasacuidarporsmismos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.addFeatures(features_Lasmujeresestnmenosdispuestasacuidarporsmismos_0);var lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lasmujeresestnmenosdispuestasacuidarporsmismos_0, 
                style: style_Lasmujeresestnmenosdispuestasacuidarporsmismos_0,
    title: 'Las mujeres están menos dispuestas a cuidar por sí mismos<br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasacuidarporsmismos_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasacuidarporsmismos_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasacuidarporsmismos_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasacuidarporsmismos_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasacuidarporsmismos_0_4.png" />  80 - 100 <br />'
        });

lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.setVisible(true);
var layersList = [baseLayer,lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0];
lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'Tiendo a e': 'Tiendo a e', });
lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'Tiendo a e': 'Hidden', });
lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Lasmujeresestnmenosdispuestasacuidarporsmismos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});