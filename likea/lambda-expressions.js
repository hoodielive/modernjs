function filter(vec, func)
{
  var result = new Array(); 
  var j = 0; 
  for ( var i=0; i < vec.length; i++ )
  {
    if ( func ( vec[i] )) 
    {
      result[j] = vec[i];
      j++; 
    }
  }
  return result; 
}
var vector = filter(students,function(ob){ return ob.average > 90; })
