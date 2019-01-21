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
var format_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0 = new ol.format.GeoJSON();
var features_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0 = format_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.readFeatures(json_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.addFeatures(features_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0);var lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0, 
                style: style_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0,
    title: '<b/>Percepción sobre el cuidado de hombres y muejeres:</b><br />El degradado de colores en el mapa, indica el porcentaje de<br /> personas que <b/>tienden a estar de acuerdo</b> en que las mujeres<br />están menos dispuestas a cuidar de sí mismas, que los hombres.<br /><br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0_0.png" />  0.0 - 20.0 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0_1.png" />  20.0 - 40.0 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0_2.png" />  40.0 - 60.0 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0_3.png" />  60.0 - 80.0 <br />\
    <img src="styles/legend/Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0_4.png" />  80.0 - 100.0 <br />'
        });

lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.setVisible(true);
var layersList = [baseLayer,lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0];
lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'Tiendo a e': 'Tiendo a e', });
lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'Tiendo a e': 'Hidden', });
lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Lasmujeresestnmenosdispuestasqueloshombresacuidarporsmismos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});