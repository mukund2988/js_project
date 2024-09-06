function speak()
{
    var text = document.getElementById("input").value;
    var sound = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(sound);
}