var app = angular.module( 'land', [] );

app.getTU = function( name ){
    name = name.replace( /([a-zA-Z])(?=[A-Z])/g, '$1-' ).toLowerCase();
    //return ['', 'components', name, name + '.html'].join( '/' );

    return ['components', name, name + '.html'].join( '/' );

};