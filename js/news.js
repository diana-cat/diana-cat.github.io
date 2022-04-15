const button = document.getElementById("button");
const content = document.querySelector('.content');

button.addEventListener('click', addNewNews);

let buttons = [];
let ps = [];
let i = 0;

function addNewNews()
{
    let nameArticle = document.getElementById('name').value;
    let article = document.getElementById('article').value;

    const newDiv = document.createElement('div');
    content.appendChild(newDiv);

    let newName = document.createElement('h2');    
    newDiv.appendChild(newName);
    newName.innerText = nameArticle;

    let newArticle = document.createElement('p');
    newDiv.appendChild(newArticle);
    newArticle.innerText = article;

    let newButton = document.createElement('input');
    newDiv.appendChild(newButton);
    newButton.type = "button";
    newButton.value = "Cвернуть";
    newButton.id = i;
    newButton.addEventListener('click', e => {let bNum = Number(e.target.id);
                                        let displayElem = ps[bNum].style.display;

                                        if (displayElem == "block") 
                                        {
                                            ps[bNum].style.display = "none";
                                        } 
                                        else 
                                        {
                                            ps[bNum].style.display = "block";
                                        }})

    buttons[i] = newButton;
    ps[i] = newArticle;
    i++;
}
