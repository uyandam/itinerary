
/*
document.getElementById('popo').addEventListener('click', function(){
    //let what = document.getElementById('goon').value;
    let what = "goon";
    console.log('Testing this business ', what);

    let popo = document.getElementById('goon');

    if (popo.innerHTML === 'Uyanda!'){
      popo.innerHTML='';
      popo.innerHTML = 'popo';
    }else {
      popo.innerHTML='';
      popo.innerHTML = 'Uyanda!';
    }
})
*/

document.getElementById('betaversion').addEventListener('click', function () {
  window.location.pathname = '/betaversion'
})

document.getElementById('comments').addEventListener('click', function () {
  window.location.pathname = '/comments'
})

document.getElementById('feedback').addEventListener('click', function () {
  window.location.pathname = '/feedback'
})
