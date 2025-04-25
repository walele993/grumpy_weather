const apiUrl = "https://api.open-meteo.com/v1/forecast";
const geocodeApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";

// Grumpy messages for each weather condition
const grumpyPhrases = {
    0: [
        "Oh, fantastic, another sunny day. Just what I didn't need.",
        "Sunshine everywhere. How original, like I haven't seen enough of this already.",
        "Clear sky again. Just my luck to have more glaring sunlight.",
        "More sunshine. Because my day wasn’t already blindingly bright enough.",
        "Perfect, clear skies. Just the thing to make me wish for some shade.",
        "Another sunny day. Brilliant. I was hoping for more of this.",
        "Clear and bright. Just what I needed to make my day even more unbearable.",
        "Sunshine without end. Can’t it just be a little less obnoxious?",
        "A day of clear skies, just what I needed to further ruin my mood.",
        "Bright and sunny. Exactly what you’d expect to make my day worse."
    ],
    1: [
        "Oh great, mostly clear skies. Just a bit more sun to annoy me.",
        "Partly clear. Fantastic. As if the weather needs to be just a little bit more annoying.",
        "Mostly clear skies. Wonderful, more sunshine to add to my misery.",
        "Just a few clouds. Perfect for keeping me annoyed without ruining the whole day.",
        "Clear with a few clouds. Because why make the weather straightforward?",
        "Mostly clear but with some clouds. As if it needed to be a little more irritating.",
        "Clear skies with some clouds. Just what I needed to make the day slightly worse.",
        "Partly clear. Great, as if it wasn’t already enough of a bother.",
        "Clear skies and a few clouds. Why can’t it just be one or the other?",
        "A mostly clear day. How original, and just perfect for enhancing my mood."