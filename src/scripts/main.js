AOS.init();

const dataevento = new Date("Aug 18, 2023 19:00:00");
const timestampeEvento = dataevento.getTime();

const contahoras = setInterval(function(){
    const agora = new Date();
    const timestampeatual = agora.getTime();

    const diaemms = 1000 * 60 * 60 * 24;
    const horaemms = 1000 * 60 * 60;
    const minutoemms = 1000 * 60;

    const distanciaEvento = timestampeEvento - timestampeatual;
    const diasateEvento = Math.floor(distanciaEvento / diaemms);
    const horasEvento = Math.floor((distanciaEvento % diaemms) / horaemms);
    const minutosEvento = Math.floor((distanciaEvento % horaemms) / minutoemms);
    const segundosEvento = Math.floor((distanciaEvento % minutoemms) / 1000);
    document.getElementById('contador').innerHTML = `${diasateEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if(distanciaEvento < 0){
        clearInterval(contahoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)