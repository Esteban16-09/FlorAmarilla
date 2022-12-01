const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Cada día que pasa te amo más y más, y también te extraño como no tienes idea. Quiero que sepas que te amare y respetare cada día de mi vida, sé que tu corazón ah paso por muchas cosas que te hicieron pensar que todo era una tormenta pero ya no más, porque por mas que sea larga una tormenta o parezca imposible quiero que sepas que yo estoy acá para ti  las 24/7 de los 365 días del año, no importa si llueve o truene o la tierra se parta en mil pedazos yo siempre estaré a tu lado amándote y apoyándote y voy a protegerte y nadie va a tocarte por que yo te cuidare siempre, aunque no sea perfecto te amo de la manera mas perfecta ya que me gustas demasiado mami, y mi mayor sueño es despertar a tu lado y verte cada mañana por el resto de mi vida y si hay vida después de la muerte quiero pasarlo a tu lado.')
    alert('Eres la persona que me hace muy feliz y que amo mucho con toda mi alma 20dcm')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
