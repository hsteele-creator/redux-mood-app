const mood = document.querySelector("#mood-image")
const happy = document.querySelector("#happy")
const sad = document.querySelector("#sad")
const angry = document.querySelector("#angry")
const confused = document.querySelector("#confused")

happy.addEventListener("click", function () {
    store.dispatch({type: "HAPPY", payload: "^ㅂ^"});
    const state = store.getState()
    mood.innerText = state.image
});

sad.addEventListener("click", function () {
    store.dispatch({type: "SAD", payload: "⊙︿⊙"})
    const state = store.getState()
    mood.innerText = state.image
})

angry.addEventListener("click", function () {
    store.dispatch({type: "ANGRY", payload: "ಠ_ಠ"})
    const state = store.getState()
    mood.innerText = state.image
})

confused.addEventListener("click", function () {
    store.dispatch({type: "CONFUSED", payload: "⊙.☉"})
    const state = store.getState()
    mood.innerText = state.image
})