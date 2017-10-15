function User (theName, theEmail) { //constructor, variablen die ein Objekt nur für sich hat
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
//wir überschreiben den prototype für User, dadurch wird auch automatisch die property constructor gelöscht
User.prototype = { //methoden und variablen, die alle Objekte gemein haben, z.B. COunter für Anzahl der Objekte
    constructor: User,  //hier setzen wir den Constructor neu
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}
/** Another way of overwriting the prototype, here you call the User.prototype every time and not once
 User.prototype.constructor = User;
 User.prototype.saveScore = function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
};
 ​
 User.prototype.showNameAndScores = function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
};
 ​
 User.prototype.changeEmail =  function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
}
 */