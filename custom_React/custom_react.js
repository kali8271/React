function cunstomRender(reactElement, container){
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)
    container.appendChild(domelement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://reactjs.org/',
        target: '_blank',
    },
    children: 'click me to visit reactjs.org',
}

const mainmodule = document.querySelector('#root')

cunstomRender(reactElement, mainmodule)