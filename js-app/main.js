const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties().then(beanVarieties => {
        const beans = document.getElementById('display-bean-varieties')
        beans.innerHTML = renderBeanHTML(beanVarieties)
    })
});

const addBean = document.getElementById('addNewBean')
addBean.addEventListener('click', event => {
    event.preventDefault()

    const newBean = {
        name: document.getElementById('bname').value,
        region: document.getElementById('bregion').value,
        notes: document.getElementById('bnotes').value
    }

    addNewBean(newBean).then(() => {
        document.getElementById('bname').value = ""
        document.getElementById('bregion').value = ""
        document.getElementById('bnotes').value = ""
    })

})


function renderBeanHTML(beans) {
    htmlToRender = `<h3>Coffee Bean Varieties</h3>
                    <div>`
    beans.forEach(bean => {
        if (bean.notes === null) bean.notes = "No Notes"
        htmlToRender += `<h3>Name: ${bean.name}</h3> 
                        <h4>Region: ${bean.region}</h4>
                        <p> Notes: ${bean.notes} </p>`
    })
    htmlToRender += '</div>'
    return htmlToRender
}



function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json())
}

function addNewBean(bean) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bean)
    }).then(res => res.json())
}