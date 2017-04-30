function comboFinder(x) {
  let cubeList = makeCubeList(x);
  cubeList.sort(comboSort);
  let matches = findMatches(cubeList);
  let formattedMatches = formatMatches(matches);
  return formattedMatches;
}

function makeCubeList(a, comboArray = []) {
  if (a === 0) {
    return comboArray;
  } else {
    let b = a;
    while (b > 0) {
      let sum = (a*a*a) + (b*b*b);
      comboArray.push({
        sum: sum,
        a: a,
        b: b
      });
      b--;
    }
    a--;
    return makeCubeList(a, comboArray);
  }
}

function comboSort(a, b) {
  return a.sum - b.sum;
}

function findMatches(cubeList) {
  let matches = [];
  for (let i = 0; i < (cubeList.length - 1); i++) {
    let matchArray = [];
    let currentObj = cubeList[i];
    i++;
    while (currentObj.sum === cubeList[i].sum) {
      matchArray.push(currentObj);
      matchArray.push(cubeList[i]);
      i++;
    }
    if (matchArray.length > 0) {
      matches.push(matchArray);
    }
  }
  return matches;
}

function formatMatches(matches) {
  let formattedMatches = [];
  for (let i = 0; i < matches.length; i++) {
    let currentMatch = matches[i];
    let formattedMatch = {
      a: currentMatch[0].a,
      b: currentMatch[0].b,
      c: currentMatch[1].a,
      d: currentMatch[1].b
    };
    formattedMatches.push(formattedMatch);
  }
  return formattedMatches;
}

console.log(comboFinder(1000));
