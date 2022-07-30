import shortid from "shortid"

export default function seed(store) {
    console.log("Insert first list")
    const firstListId = shortid.generate()

    store.dispatch({
        type: "ADD_LIST",
        payload: { listId: firstListId, listTitle: "Todays Schedule" },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: firstListId,
            cardId: shortid.generate(),
            cardPetName: "Athena",
            cardText: "Take a walk with Pete",
        },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: firstListId,
            cardId: shortid.generate(),
            cardText: "Second card",
        },
    })

    console.log("Insert second list")
    const secondListId = shortid.generate()

    store.dispatch({
        type: "ADD_LIST",
        payload: { listId: secondListId, listTitle: "In Process" },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: secondListId,
            cardId: shortid.generate(),
            cardText: "Card 1",
        },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: secondListId,
            cardId: shortid.generate(),
            cardText: "Card 2",
        },
    })

    const thirdListId = shortid.generate()

    store.dispatch({
        type: "ADD_LIST",
        payload: { listId: thirdListId, listTitle: "Done - Pending Payment" },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: thirdListId,
            cardId: shortid.generate(),
            cardText: "First card",
        },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: thirdListId,
            cardId: shortid.generate(),
            cardText: "Second card",
        },
    })

    const forthListId = shortid.generate()

    store.dispatch({
        type: "ADD_LIST",
        payload: { listId: forthListId, listTitle: "Done - Pending Pickup" },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: forthListId,
            cardId: shortid.generate(),
            cardText: "First card",
        },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: forthListId,
            cardId: shortid.generate(),
            cardText: "Second card",
        },
    })

    const fifthListId = shortid.generate()

    store.dispatch({
        type: "ADD_LIST",
        payload: { listId: fifthListId, listTitle: "Completed" },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: fifthListId,
            cardId: shortid.generate(),
            cardText: "First card",
        },
    })

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            listId: fifthListId,
            cardId: shortid.generate(),
            cardText: "Second card",
        },
    })
}
