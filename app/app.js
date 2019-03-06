var app = angular.module("KelimeHazinesi", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/pages/index.html"
        })
        .when("/categories", {
            templateUrl: "app/pages/categories.html",
            controller: "CategoriesController"
        })
        .when("/contents/:categoryname", {
            templateUrl: "app/pages/contents.html",
            controller: "ContentsController"
        })
        .when("/contact", {
            templateUrl: "app/pages/contact.html",
            controller: "TestController"
        })
        .when("/test",{
            templateUrl: "app/pages/apitest.html",
            controller:"ApiController"
        })
        .otherwise({
            redirectTo: "/"
        });
});


app.directive('swiper', function(){
    return {
        link: function (scope, element) {
            scope.$on('content-changed', function () {
                new Swiper(element, {
                    //initialSlide:1,
                    slideShadows : false,
                    effect: 'coverflow',
                    grabCursor: false,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : false,
                    }
                })
            })
        }
    }
});

app.directive('isLoaded', function () {
   return{
       scope:false,
       restrict:'A',
       link:function (scope) {
           if(scope.$last){
               scope.$emit('content-changed');
               console.log("page is ready");
           }
       }
   }
});

app.constant("KelimeHazinesi",
    {
        app:
            {
                name: 'Kelime Hazinesi',
                version: '1',
                baseurl: 'http://www.bertancakici.com/apps/kelime-hazinesi/',
                contact: 'iletisim@kelimehazinesi.com',
                creator:
                    {
                        name: "Halil Bertan ÇAKICI",
                        contact: 'halil@bertancakici.com',
                        socials:
                            {
                                instagram: 'https://www.instagram.com/bertancakici'
                            }
                    }
            }
    }
);

app.run(function ($rootScope, KelimeHazinesi) {
    $rootScope.KelimeHazinesi = KelimeHazinesi
});