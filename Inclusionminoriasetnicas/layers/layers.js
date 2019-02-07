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
var format_Inclusionminoriasetnicas_0 = new ol.format.GeoJSON();
var features_Inclusionminoriasetnicas_0 = format_Inclusionminoriasetnicas_0.readFeatures(json_Inclusionminoriasetnicas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inclusionminoriasetnicas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Inclusionminoriasetnicas_0.addFeatures(features_Inclusionminoriasetnicas_0);var lyr_Inclusionminoriasetnicas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inclusionminoriasetnicas_0, 
                style: style_Inclusionminoriasetnicas_0,
    title: '<b/>Percepción sobre actividades en las que se deberían incluir<br />a las minorías étnicas:</b><br />El degradado de colores en el mapa indica el porcentaje de <br /> personas que creen que se debería incluir a estas minorías<br />en <b/>trabajos en empresas públicas</b><br /><br />\
    <img src="styles/legend/Inclusionminoriasetnicas_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Inclusionminoriasetnicas_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Inclusionminoriasetnicas_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Inclusionminoriasetnicas_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Inclusionminoriasetnicas_0_4.png" />  80 - 100 <br />'
        });

lyr_Inclusionminoriasetnicas_0.setVisible(true);
var layersList = [baseLayer,lyr_Inclusionminoriasetnicas_0];
lyr_Inclusionminoriasetnicas_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Gráfica': 'Gráfica', 'Año': 'Año', 'Trabajos e': 'Trabajos e', });
lyr_Inclusionminoriasetnicas_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Gráfica': 'Photo', 'Año': 'TextEdit', 'Trabajos e': 'Hidden', });
lyr_Inclusionminoriasetnicas_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Gráfica': 'no label', 'Año': 'header label', });
lyr_Inclusionminoriasetnicas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});