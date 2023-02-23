function Talk(){
var Know = {
"Who Are You" : "Hello, Codewith_random Here ",
"How Are You" : "Good :)",
"What Can I Do For You" : "Please Give Us A Follow & Like.",
"Your Followers" : "I Have My Family Of 5000 Members, I Don't Have Follower ,Have Supportive Famiy ",
"Ok" : "Thank You So Much ",
"Bye" : "Okay! Will Meet Soon.."
};   

var user =  Document.GetElementById('userBox').value;
document.getElementById('ChatLog').innerHTML = user +"<br>";
if(user in Know){
    document.getElementById('Chatlog').innerHTML = Know [user ]+"<br>";


}
else{
    document.getElementById('ChatLog').innerHTML= "sorry, <br>";
}
}