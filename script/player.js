document.getElementById('leo-btn').addEventListener('click',function(){
   const myList = document.getElementById('myList');
   let newItem = document.createElement('li');
   newItem.textContent = 'Leo Messi'


   myList.appendChild(newItem);
})