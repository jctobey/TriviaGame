var rollingStones = {
    Question: "What band had their first #1 international hit with the song, '(I Can't Get No) Satisfaction?'",
    Choices: ["The Rolling Stones", "The Beatles", "The Kinks", "The Who"],
    Answer: "The Rolling Stones",
    QuestionAnswered: false,
};
var notoriousBIG = {
    Question: "What rap artist's debut album, 'Ready To Die', went double platinum?",
    Choices: ["Nas", "Tupac", "Notorious B.I.G.", "Rakim"],
    Answer: "Notorious B.I.G.",
    QuestionAnswered: false,
}
var frankZappa = {
    Question: "What artist, considered the 'Godfather of Comedy Rock', released their debut album, 'Freak Out!', in 1966?",
    Choices: ["Weird Al Yankovich", "Captain Beefheart", "Frank Zappa", "MC5"],
    Answer: "Frank Zappa",
    QuestionAnswered: false,
}
var theWho = {
    Question: "What band famously overloaded their drum kit with explosives in their American TV Debut, causing the lead singer to lose most of their hearing?",
    Choices: ["Pink Floyd", "The Yardbirds", "The Who", "The Rolling Stones"],
    Answer: "The Who",
    QuestionAnswered: false,
}
var bobDylan = {
    Question: "What artist was booed at the 1965 Newport Folk Festival for 'going electric' in their performance of the newly released, 'Like a Rolling Stone'?",
    Choices: ["Pete Seeger", "Bob Dylan", "Jackson Browne", "Johnny Cash"],
    Answer: "Bob Dylan",
    QuestionAnswered: false,
}
var monterreyPop = {
    Question: "At what festival did Jimi Hendrix light his guitar on fire during his rendition of 'Wild Thing'?",
    Choices: ["Woodstock Festival", "Monterey Pop Festival", "Altamont Festival", "Atlanta Pop Festival"],
    Answer: "Monterey Pop Festival",
    QuestionAnswered: false,

}
var radiohead = {
    Question: "What artist replaced their rock sound with synthesizers and drum machines on the seminal electronic album, 'Kid A'?",
    Choices: ["Interpol", "LCD Soundsystem", "Radiohead", "Beck"],
    Answer: "Radiohead",
}
var beastieBoys = {
    Question: "What artist, previously known for boyish hip-hop hits like 'Girls', collaborated with producers The Dust Brothers to create the groundbreaking album 'Paul's Boutique'?",
    Choices: ["Public Enemy", "Boogie Down Productions", "The Beastie Boys", "A Tribe Called Quest"],
    Answer: "The Beastie Boys"
}
var myBloodyValentine = {
    Question: "After seeing this artist live in concert, a journalist coined the term 'shoegaze', referring to the band's extensive use of guitar pedals",
    Choices: ["Jimi Hendrix", "Link Wray", "My Bloody Valentine", "Stevie Ray Vaughn"],
    Answer: "My Bloody Valentine",
    QuestionAnswered: false,
}
var professorLonghair = {
    Question: "What artist recorded 'Big Chief', referring to the iconic native american garb worn during Mardi Gras festivities, in 1964?",
    Choices: ["Allen Touissant", "Professor Longhair", "Jelly Roll Morton", "Lightnin' Hopkins"],
    Answer: "Professor Longhair",
    QuestionAnswered: false,
}

questionsAvailable = [rollingStones, professorLonghair, notoriousBIG, frankZappa, theWho, bobDylan, monterreyPop, radiohead, beastieBoys, myBloodyValentine]
questionsAnswered = [];
questionsCorrect = 0;
questionsMissed = 0;
totalQuestions = 10;


let initialize = () => {


    Timer = 0
    randQuestion = Math.floor(Math.random() * questionsAvailable.length)
    Random = questionsAvailable[randQuestion]

    questRandom = Random.Question;
    answerRandom = Random.Answer;
    $('.user-message').empty();
    questionsAnswered.push(Random);

    $(".question").text(questRandom);



    function buttonify(x) {
        return '<button type="button" class="btn btn-secondary choice">' + x + '</button>'

    }
    $(".choices").empty();
    for (let i = 0; i < Random.Choices.length; i++) {

        $(".choices").append(buttonify(Random.Choices[i]))






    }


}


$(document).ready(function () {

    initialize();








    let time = setInterval(function () {
        if (questionsAvailable.length === 0) {
            clearInterval(time);
            $('.user-message').empty();
            $('.user-message').append("You completed trivia! You got " + questionsCorrect + " questions correct out of " + totalQuestions + ".")
            $('.user-message').append('<button type=button class="btn btn-secondary button gameover">' + "Play Again" + '</button>');
        }
        else if (!(Timer === 11)) {
            $(".timer").html(10 - Timer);
            Timer++;
        }
        else {
            setTimeout(initialize, 750);
            $('.user-message').append("Time's Up!");
            questionsAvailable.splice(randQuestion, 1);
        }



    }, 1000);

    $(document).on('click', '.choice', function () {
        questionsAvailable.splice(randQuestion, 1);
        $(".choice").removeClass('choice');

        if ($(this).html().trim() === answerRandom) {
            questionsCorrect++;
            $('.user-message').append("That is correct!")
            $(".correct").html("Questions Correct: " + questionsCorrect);
            setTimeout(initialize, 750);



        }
        else {
            questionsMissed++;
            $('.user-message').append("Incorrect");
            $(".missed").html("Questions Missed: " + questionsMissed);
            setTimeout(initialize, 750);
        }

    })
    $(document).on('click', '.gameover', function () {
        setTimeout(function(){ location.reload(); }, 1000);
    })
})


