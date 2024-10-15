
dispatch(login());
    let nilaijumlah = jumlah;
if (nilaijumlah == 0) {
    alert("Anda sudah tidak berhak, silakan tunggu 15 menit");
    return;
  }
  else if (!email || !password) {
    alert("Please enter your email and password");
    return;
  }
  else if (email != "sulis@gmail.com" || password != "156") {
    nilaijumlah = nilaijumlah - 1;
    setJumlah(nilaijumlah);
    alert("Wrong email or password");
    return;
  }
  else {
    dispatch(login);
    //router.push("/dashboard")
  }
 <a href = "https://github.com/aenal-abie/web12024/blob/main/src/app/layout.js"></a> 