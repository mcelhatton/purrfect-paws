import shortid from "shortid";

export default function seed(store) {
  console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "Todays Schedule" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardPetName: "Athena - Teeth brushing",
      cardText: "Athena - Teeth brushing"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Pete the Penguin - Water proofing"
    }
  });

  console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "In Process" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Lily the Lama - Brushing"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Tank the Turtle - Turtle Wax"
    }
  });

  const thirdListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: thirdListId, listTitle: "Done - Pending Payment" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Cali the Camel - Camel Camp"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Sally the Sheep - Shearing"
    }
  });

  const forthListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: forthListId, listTitle: "Done - Pending Pickup" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: forthListId,
      cardId: shortid.generate(),
      cardText: "Bella the Bear - Nail Trimming"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: forthListId,
      cardId: shortid.generate(),
      cardText: "Kelly the Kitty - Haircut"
    }
  });

  const fifthListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: fifthListId, listTitle: "Completed" }
  });

};