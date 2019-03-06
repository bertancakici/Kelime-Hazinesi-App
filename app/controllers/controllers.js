app.controller('MenuController', function ($scope) {
    $scope.isMenuOpen = function () {

        if ($('body').hasClass('sidebar-left-close') !== true) {
            // Menu Açık.
            $('body').toggleClass('sidebar-right-close');
            $('body').addClass('sidebar-left-close');
        }

    }

});
app.controller('CategoriesController', function ($http, $scope) {

    $http(
        {
            method: 'GET',
            url: 'http://www.bertancakici.com/apps/kelime-hazinesi/contents/kategoriler/kategoriler.json'
        })
        .then(noerror, error);

    function noerror(response) {
        $scope.categories = response.data.kategoriler;
    }

    function error(response) {
        console.log(response);
    }

});


app.controller('ContentsController', function ($http, $scope, $routeParams, KelimeHazinesi) {
    var categorySlug = $routeParams.categoryname;
    //console.log(categorySlug.toString());
    $http(
        {
            method: 'GET',
            url: 'http://www.bertancakici.com/apps/kelime-hazinesi/contents/kategoriler/'+ categorySlug+'/'+categorySlug+'.json'
        })
        .then(noerror, error);

    function noerror(response) {
        $scope.cname = response.data.categoryname.toLowerCase();
        $scope.contents = response.data.words;
    }

    function error(response) {
        console.log(response);
    }


    $scope.PlaySound = function (lang, cid) {
        var SoundURL = KelimeHazinesi.app.baseurl + '/contents/kategoriler/' + categorySlug + '/sesler/' + lang + '/' + cid + '.mp3';
        var audio = new Audio(SoundURL);
        audio.play();
    }

});


app.controller('ApiController', function ($http, $scope) {
    $http(
        {
            method: 'GET',
            url: 'http://192.168.1.105:49857/api/category'
        })
        .then(noerror, error);

    function noerror(response) {
        console.log(response.data);
        $scope.veriler = response.data;
    }

    function error(response) {
        console.log(response);
    }


    $scope.PlaySound = function (lang, cid) {
        var SoundURL = KelimeHazinesi.app.baseurl + '/contents/kategoriler/' + categorySlug + '/sesler/' + lang + '/' + cid + '.mp3';
        var audio = new Audio(SoundURL);
        audio.play();
    }

});

