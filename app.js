(function(){
 	var app = angular.module('gemStore', [ ]);

 	app.controller('StoreController', function(){
 		this.product = gems;
 	});

 	var gems = [
	{

  		name: "Dodecahedron",
 	    price: 2.95,
  		description: '12345678',
  		canPurchase: true,
  		soldOut: false,
		images: [

  			{
  				full:'dodecahedron-01-full.jpg',
  				thumb: 'dodecahedron-01-thumb.jpg'
				}
				]
    },
    {
        name: "Pentagonal Gem",
 	    price: 5.95,
  		description: "12345678",
  		canPurchase: true,
  		soldOut: false,
  	    images: [

  			{
  				full:'dodecahedron-02-full.jpg',
  				thumb: 'dodecahedron-02-thumb.jpg'
				}
				]

  	}
 ];

  }) ();