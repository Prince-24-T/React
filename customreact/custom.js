
function cumstomRendar(reactElement,container){

/*    const domEelemet= document.createElement(reactElement.type);
domEelemet.innerHTML= reactElement.children;
domEelemet.setAttribute('href',reactElement.props.href)
domEelemet.setAttribute('target',reactElement.props.target)
container.appendChild(domEelemet);
*/
const domEelemet = document.createElement(reactElement.type);
domEelemet.innerHTML= reactElement.children;
for(var prop in reactElement.props){
    if (prop ==='children') continue
    domEelemet.setAttribute(prop,reactElement.props[prop])
    container.appendChild(domEelemet);
}
}


const reactElement={
    type:'a',
    props:{
        href:'https;//google.com',
        target:'_black'
    },
    children: 'click me to visit google'
    
}

const containerMain=document.querySelector("#root");
cumstomRendar(reactElement,containerMain );