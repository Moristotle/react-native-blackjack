import http from "../../http-service";
import { BaseUrl } from "../../api-config";

export async function createNewDeck(amount) {
  return await http.get(`${BaseUrl.deck}new/shuffle/?deck_count=${amount}`);
}

export async function createNewDeckAndDrawCards(amount) {
    return await http.get(`${BaseUrl.deck}new/draw/?count=${amount}`)
}

export async function drawCards(deckId, amount) {
    return await http.get(`${BaseUrl.deck}${deckId}/draw/?count=${amount}`)
}

export async function addCardsToPile(deckId, pileName, cards) {
    return await http.get(`${BaseUrl.deck}${deckId}/pile/${pileName}/add/?cards=${cards}`)
}

export async function getListOfCardsInPile(deckId, pileName) {
    return await http.get(`${BaseUrl.deck}${deckId}/pile/${pileName}/list`)
}

export async function drawCardsFromPile(deckId, pileName, amount) {
    return await http.get(`${BaseUrl.deck}${deckId}/pile/${pileName}/draw/?count=${amount}`)
}