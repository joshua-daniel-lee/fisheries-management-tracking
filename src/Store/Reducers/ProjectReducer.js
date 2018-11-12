const initState = {
  projects: [
    { id: "1", title: "Fish 1", content: "blah blah blah" },
    { id: "2", title: "Fish 2", content: "blah blah blah" },
    { id: "3", title: "Fish 3", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project success");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
