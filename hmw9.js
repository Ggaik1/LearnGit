// main url - https://api.api-ninjas.com/v1/
// country - country?name=Armenia
// cocktail - cocktail?name=negroni
// cats - cats?name=abyssinian
// dog - dogs?name=golden retriever

async function globalFunc(finishUrl){
    const afina = await fetch("https://api.api-ninjas.com/v1/" + finishUrl,
    {headers:{'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return afina.json();
}

globalFunc("cats?name=abyssinian").then((result) => {
    console.log(result);
});




async function remeberLesson(finishUrl){
    const yesIremember = await fetch("https://api.api-ninjas.com/v1/" + finishUrl,
    {headers:{'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return yesIremember.json();
};

remeberLesson("country?name=Armenia").then((reuslt) => {
    console.log(result);
});