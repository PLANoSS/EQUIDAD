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
var format_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.format.GeoJSON();
var features_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = format_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.readFeatures(json_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.addFeatures(features_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0);var lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0, 
                style: style_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0,
    title: '<b/>Percepción sobre la diseminación de estereotipos de género:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que creen que es en los trabajos donde se disemina más estereotipos<br />de género. <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0_4.png" />  80 - 100 <br />'
        });var format_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1 = new ol.format.GeoJSON();
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
        });var format_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2 = new ol.format.GeoJSON();
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
        });var format_Anhaydesigualdadesentrehombresymujeres_3 = new ol.format.GeoJSON();
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
        });var format_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.format.GeoJSON();
var features_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = format_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.readFeatures(json_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.addFeatures(features_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4);var lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4, 
                style: style_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4,
    title: '<b/>Percepción sobre la carrera de los padres:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que están totalmente en desacuerdo  en que un padre o una madre<br />debe poner su carrera por encima del cuidado de sus hijos.<br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4_4.png" />  80 - 100 <br /><br />'
        });var format_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5 = new ol.format.GeoJSON();
var features_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5 = format_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.readFeatures(json_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.addFeatures(features_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5);var lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5, 
                style: style_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5,
    title: '<b/>Percepción sobre las tareas del hogar:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que tienden a estar de acuerdo en que los hombres están menos calificados<br />que las mujeres para realizar las tareas del hogar.<br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5_4.png" />  80 - 100 <br /><br />'
        });var format_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.format.GeoJSON();
var features_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = format_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.readFeatures(json_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.addFeatures(features_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6);var lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6, 
                style: style_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6,
    title: '<b/>Percepción sobre el trabajo de los hombres con los niños:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que tienden a estar de acuerdo  en que los hombres tienen que trabajar más<br />en el cuidado de los niños.<br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6_4.png" />  80 - 100 <br /><br />'
        });var format_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7 = new ol.format.GeoJSON();
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

lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.setVisible(false);lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.setVisible(true);lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.setVisible(false);lyr_Anhaydesigualdadesentrehombresymujeres_3.setVisible(false);lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.setVisible(false);lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.setVisible(false);lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.setVisible(false);lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.setVisible(false);
var layersList = [baseLayer,lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0,lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1,lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2,lyr_Anhaydesigualdadesentrehombresymujeres_3,lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4,lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5,lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6,lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7];
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'En los tra': 'En los tra', });
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Violencia': 'Violencia', });
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Asegurándo': 'Asegurándo', });
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Si, hay mu': 'Si, hay mu', });
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Totalmente': 'Totalmente', });
lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Tiendo a e': 'Tiendo a e', });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Tiendo a e': 'Tiendo a e', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Totalmente': 'Totalmente', });
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'En los tra': 'TextEdit', });
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Violencia': 'TextEdit', });
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Asegurándo': 'TextEdit', });
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Si, hay mu': 'TextEdit', });
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Totalmente': 'TextEdit', });
lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Tiendo a e': 'TextEdit', });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Tiendo a e': 'TextEdit', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Totalmente': 'TextEdit', });
lyr_Creequeelmedioquediseminamsestereotiposdegneroesenlostrabajos_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'En los tra': 'no label', });
lyr_Entiendelaviolenciaenelhogarcomoviolenciafsicaentremiembrosdelafamilia_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Violencia': 'no label', });
lyr_Asegurarbeneficiossocialesparaincluiralapoblacinenelmercadolaboral_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Asegurándo': 'no label', });
lyr_Anhaydesigualdadesentrehombresymujeres_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Si, hay mu': 'no label', });
lyr_Totalmentedeacuerdoconqueunpadreounamadredebeponersucarreraporencimadelcuidadodesushijos_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Totalmente': 'no label', });
lyr_Tiendeaestardeacuerdoconqueloshombresestnmenoscalificadosquelasmujeresparalastareasdelhogar_5.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Tiendo a e': 'no label', });
lyr_Tiendeaestardeacuerdoconqueloshombrestrabajenmsenelcuidadodelosnios_6.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Tiendo a e': 'no label', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Totalmente': 'no label', });
lyr_Totalmentedeacuerdoconquetodalafamiliasufrecuandolamadretienetrabajoatiempocompleto_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});