const redirect=()=>{
    var u=10
  setInterval(() => {
      document.getElementById('second').innerText=u
      u--
      if(u===-1)
        document.getElementById('home').click()

  }, 1000);
}
redirect()