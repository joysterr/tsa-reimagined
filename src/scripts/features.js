const featureText = [
    'Classify text as: <b>Positive</b><b>Neutral</b><b>Negative</b>',
    'Intelligently detect and flag text if input is sarcastic',
    'Emojis are preserved and utilised during Sentiment Analysis'
]

const featureDefault = [
    'Sentiment Analysis',
    'Sarcasm Detection',
    'Emoji Handling'
]

const featureCards = document.querySelectorAll('.feature-card').forEach((val, i) => {
    let isClicked = true
    val.addEventListener('click', () => {
        if (isClicked) {
            val.innerHTML = featureText[i]
            isClicked = false
        } else {
            val.innerHTML = featureDefault[i]
            isClicked = true
        }
    })
})