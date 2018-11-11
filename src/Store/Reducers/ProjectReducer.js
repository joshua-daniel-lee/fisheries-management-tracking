const initState = {
  projects: [
    { id: "1", title: "Fish 1", content: "blah blah blah" },
    { id: "2", title: "Fish 2", content: "blah blah blah" },
    { id: "3", title: "Fish 3", content: "blah blah blah" }
  ]
};

const ProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
  }
  return state;
};

export default ProjectReducer;
