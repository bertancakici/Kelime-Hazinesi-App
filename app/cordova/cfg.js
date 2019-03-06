document.addEventListener('deviceready', onDeviceReady);
function onDeviceReady()
{

    console.log("cihaz hazır");

    /* Ön Belleke Temizleme :: BAŞLANGIÇ */
    // https://github.com/tiltshiftfocus/cordova-plugin-cache
    var cacheTemizlendi = function(status) {
        console.log('Ön Bellek Temizleme Sonucu: ' + status);
    };
    var cacheHata = function(status) {
        alert('Ön Bellek Temizleme Sonucu: ' + status);
    };
    window.cache.clear( cacheTemizlendi, cacheHata );
    window.cache.cleartemp();
    /* Ön Belleke Temizleme :: SATIRSONU */
}