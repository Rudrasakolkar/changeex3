const cl=console.log;

const House = document.getElementById('House')

function onFilter (eve) {
    let val = eve.target.value;
    const allDivs = [...document.querySelectorAll('.all')]
    allDivs.forEach(d=>{
        d.classList.add('d-none');
    })

    const selectedDiv = [...document.getElementsByClassName(val)]
        selectedDiv.forEach(d=>{
            d.classList.remove('d-none')
        })
}

House.addEventListener("change" , onFilter)