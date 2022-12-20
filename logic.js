const mood = document.querySelector("#mood-image")
const happy = document.querySelector("#happy")
const sad = document.querySelector("#sad")
const angry = document.querySelector("#angry")
const confused = document.querySelector("#confused")

happy.addEventListener("click", function () {
    store.dispatch({type: "CHANGE_MOOD", payload: "^ㅂ^"});
    const state = store.getState()
    mood.innerText = state.image
});

sad.addEventListener("click", function () {
    store.dispatch({type: "CHANGE_MOOD", payload: "⊙︿⊙"})
    const state = store.getState()
    mood.innerText = state.image
})

angry.addEventListener("click", function () {
    store.dispatch({type: "CHANGE_MOOD", payload: "ಠ_ಠ"})
    const state = store.getState()
    mood.innerText = state.image
})

confused.addEventListener("click", function () {
    store.dispatch({type: "CHANGE_MOOD", payload: "⊙.☉"})
    const state = store.getState()
    mood.innerText = state.image
})