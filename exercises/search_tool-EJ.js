function searchTool(expr, ...files) {
  
  let result = [];

  function searchInside(...files) {

    let matches = [];

    for (let file of files) {
      /*
      if file is directory {
        for each insideFile of file: seachInside(file)
        */
      /* 
      if file is a file:
        if content of file matches expr -> push to matches
        push file to results
      */
    }
  }
  searchInside(expr, files);

  return result;
}