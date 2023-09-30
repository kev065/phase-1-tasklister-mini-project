document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");
  const body = document.querySelector('body');
  const tasks = document.querySelector('#tasks');
  
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const task = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = " x";
    task.textContent = `${e.target[0].value} `;
    task.append(btn);
    tasks.append(task);
    
    btn.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
      });

    });
  });