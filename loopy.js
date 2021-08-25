var l = 100;
for (l = 100;l <= 200 ;l = l + 1 ) 
{ if ( l % 3 === 0 && l % 4 === 0 ){ 
  console.log( "LoopyLighthouse" ); }
  if ( l % 3 === 0 )  {
    console.log ( "Loopy" ); }
  else if ( l % 4 === 0 ) {
    console.log( "Lighthouse" ); }
  else {
    console.log(l);
  }
}