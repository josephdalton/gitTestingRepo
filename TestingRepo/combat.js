/**
 * Created with JetBrains WebStorm.
 * User: austinemayer
 * Date: 5/17/13
 * Time: 11:26 PM
 * To change this template use File | Settings | File Templates.
 */

<script>

var strayCatHp;
var player=prompt("Please enter your players name","");                                //asks for the persons character name
var x= "Hello "+ player + "! Start a Cat Fight!";
document.write(x);


function scratch()
{
    var damage =20;
    strayCatHp -damage;

}




</script>