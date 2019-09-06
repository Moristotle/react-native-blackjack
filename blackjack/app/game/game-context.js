import { useLocalStore } from 'mobx-react-lite';
import { createNewDeck, drawCards, drawCardsFromPile, addCardsToPile, getListOfCardsInPile } from './game-service';

export const GameProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        /*observables*/
        deck: {
            success: false,
            deck_id: "",
            remaining: 0,
        },
        cards: [],
        score: 0,
        pilePlayer: [],
        pileDealer: [],
        isLoading: false,
        counter: 0,

        async createNewDeck(amount) {
            store.isLoading = true;
            try {
                const {data} = await createNewDeck(amount);
                store.deck = data;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },
        async drawCards(deckId, amount) {
            store.isLoading = true;
            try {
                const {data} = await drawCards(deckId, amount);
                store.cards = data.cards;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },
        async addCardsToPilePlayer(deckId, cards) {
            store.isLoading = true;
            try {
                await addCardsToPile(deckId, "player", cards);
                const {data} = await getListOfCardsInPile(deckId, "player");
                store.pilePlayer = data.piles.player;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },
        async addCardsToPileDealer(deckId, cards) {
            store.isLoading = true;
            try {
                await addCardsToPile(deckId, "dealer", cards);
                const {data} = await getListOfCardsInPile(deckId, "dealer");
                store.pileDealer = data.piles.dealer;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },

        async drawCardsFromPiles(deckId, amount) {
            store.isLoading = true;
            try {
                if(store.counter >= 5) {
                    return;
                }
                await drawCardsFromPile(deckId, "player", amount);
                await drawCardsFromPile(deckId, "dealer", amount);
                store.pileDealer = []
                store.pilePlayer = []
                store.counter += 1
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },

        setScore(score) {
            store.isLoading = true;
            try {
                store.score = score;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },
        resetGame() {
            store.deck = {}
            store.cards = []
            store.score = 0
            store.pilePlayer = []
            store.pileDealer = []
            store.counter = 0;
        }
    }))
}