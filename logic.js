const input=document.querySelector("input");
const button=document.querySelector("button");
button.addEventListener("click",createGrid);
function createGrid()
{
    const size=parseInt(input.value);
    grid=document.querySelector("div.grid");
    grid.innerHTML='';
    
    for(let i=1;i<=size;i++)
    {
        container=document.createElement("div");
        container.classList.add("container");
        container.style.height=`${960/size}px`;
        container.style.width=`960px`;
        for(let j=1;j<=size;j++)
        {
            const item=document.createElement("div");
            item.classList.add("item");
            item.style.height=container.style.height;
            item.style.width=`${960/size}px`;
            item.addEventListener("mouseenter",()=>{
                changeColor(item);
            });
            container.appendChild(item);
            
        }
        grid.appendChild(container);
    }
}
function changeColor(item)
{
    let rrandom=Math.floor(Math.random()*256);
    let brandom=Math.floor(Math.random()*256);
    let grandom=Math.floor(Math.random()*256);
    let color=`rgb(${rrandom},${brandom},${grandom})`;
    item.style.backgroundColor=color;
}