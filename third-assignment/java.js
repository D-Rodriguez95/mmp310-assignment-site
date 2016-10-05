// The comments you find below are my multiple attempts at trying to make
// the 8-ball. eventually the answer became very simple after looking through so many sites.
// one of which is (https://eightball.tridelphia.net/) and 
// (https://programmingbydoing.com/a/magic-8ball.html) after taking a look
// at both and trying to incorporate switches and breaks, it was
// much more simple than that.

{
var answers = [ 
"As I see it, Yes", 
"Ask Again Later", 
"Better Not Tell You Now",
"Cannot Predict Now",
"Concentrate And Ask Again",
"Don't Count On It",
"It Is Certain",
"It Is Decidedly So",
"Most Likely",
"My Reply Is No",
"My Sources Say No",
"Outlook, Good",
"Outlook, Not So Good",
"Reply Hazy Try Again",
"Signs Point To Yes",
"Very Doubtful",
"Without A Doubt",
"Yes",
"Yes Definitely",
"You May Rely On It",
];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;

};

// var answers;

// for (i = 0; i < answers.length; i++)
//     answers[i] = new response();

// answers[0].src  =  message = document.getElementById("message");
// message.innerHTML = "As I see it, Yes";

// answers[1].src  =  message = document.getElementById("message");
// message.innerHTML = "Ask Again Later";

// answers[2].src  =  message = document.getElementById("message");
// message.innerHTML = "Better Not Tell You Now";

// answers[3].src  =  message = document.getElementById("message");
// message.innerHTML = "Cannot Predict Now";

// answers[4].src  =  message = document.getElementById("message");
// message.innerHTML = "Concentrate And Ask Again";

// answers[5].src  =  message = document.getElementById("message");
// message.innerHTML = "Don't Count On It";

// answers[6].src  =  message = document.getElementById("message");
// message.innerHTML = "It Is Certain";

// answers[7].src  =  message = document.getElementById("message");
// message.innerHTML = "It Is Decidedly So";

// answers[8].src  =  message = document.getElementById("message");
// message.innerHTML = "Most Likely";

// answers[9].src  =  message = document.getElementById("message");
// message.innerHTML = "My Reply Is No";

// answers[10].src  =  message = document.getElementById("message");
// message.innerHTML = "My Sources Say No";

// answers[11].src  =  message = document.getElementById("message");
// message.innerHTML = "Outlook, Good";

// answers[12].src  =  message = document.getElementById("message");
// message.innerHTML = "Outlook, Not So Good";

// answers[13].src  =  message = document.getElementById("message");
// message.innerHTML = "Reply Hazy Try Again";

// answers[14].src  =  message = document.getElementById("message");
// message.innerHTML = "Signs Point To Yes";

// answers[15].src  =  message = document.getElementById("message");
// message.innerHTML = "Very Doubtful";

// answers[16].src  =  message = document.getElementById("message");
// message.innerHTML = "Without A Doubt";

// answers[17].src  =  message = document.getElementById("message");
// message.innerHTML = "Yes";

// answers[18].src  =  message = document.getElementById("message");
// message.innerHTML = "Yes Definitely";

// answers[19].src  =  message = document.getElementById("message");
// message.innerHTML = "You May Rely On It";

// var r = new Random();

// 		var choice = 1 + r.nextInt(15);
// 		var response = "";

// 		if ( choice == 1 )
// 			response = "It is certain";
// 		else if ( choice == 2 )
// 			response = "It is decidedly so";
// 		else if ( choice == 3 )
// 			response = "Without a doubt";
// 		else if ( choice == 4 )
// 			response = "Yes - definitely";
// 		else if ( choice == 5 )
// 			response = "You may rely on it";
// 		else if ( choice == 6 )
// 			response = "As I see it, yes";
// 		else if ( choice == 7 )
// 			response = "Most likely";
// 		else if ( choice == 8 )
// 			response = "Outlook good";
// 		else if ( choice == 9 )
// 			response = "Signs point to yes";
// 		else if ( choice == 10 )
// 			response = "Yes";
// 		else if ( choice == 11 )
// 			response = "Reply hazy, try again";
// 		else if ( choice == 12 )
// 			response = "Ask again later";
// 		else if ( choice == 13 )
// 			response = "Better not tell you now";
// 		else if ( choice == 14 )
// 			response = "Cannot predict now";
// 		else if ( choice == 15 )
// 			response = "Concentrate and ask again";
// 		else 
// 			response = "8-BALL ERROR!";


    
}

