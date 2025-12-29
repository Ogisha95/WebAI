function tellStory(arr) {
  let name = arr[0];     
  let mood = arr[1];     
  let activity = arr[2]; 
  
  let story = `This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day.`;
  return story;          
}

console.log(tellStory(["Stefan", "happy", "coding"]));
